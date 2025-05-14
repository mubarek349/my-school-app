"use server";
import { correctAnswer } from "@/actions/get-result";
import prisma from "@/lib/db";
import { showAnswer } from "./show-answers";
import sendMessage from "@/bot";
let noOfTrial = 0;
export async function unlockingNextChapter(
  courseId: string,
  chapterId: string,
  chat_id: string
) {
  try {
    if (!chapterId || !chat_id || !courseId) {
      console.error("Invalid input: chapterId or chat_id is missing.");
      throw new Error("Invalid input: chapterId and chat_id are required.");
    }

    console.log("Fetching student with chat_id:", chat_id);
    const student = await prisma.wpos_wpdatatable_23.findFirst({
      where: { chat_id: chat_id },
    });

    if (!student?.wdt_ID) {
      console.error("Student not found for chat_id:", chat_id);
      throw new Error("Student not found for the provided chat_id.");
    }

    console.log(
      "Fetching result for chapterId:",
      chapterId,
      "studentId:",
      student.wdt_ID
    );
    const { result } = await correctAnswer(chapterId, student.wdt_ID);
    if (!result) {
      console.error("Failed to retrieve result for chapterId:", chapterId);
      throw new Error("Failed to retrieve result from correctAnswer.");
    }

    console.log("Fetching previous chapter with id:", chapterId);
    const prevChapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      select: { position: true },
    });

    if (!prevChapter) {
      console.error("Previous chapter not found for id:", chapterId);
      throw new Error("Previous chapter not found.");
    }
    if (result.score == 1) {
      console.log("creating student progress for chapterId:", chapterId);

      const progress = await prisma.studentProgress.findFirst({
        where: {
          studentId: student.wdt_ID,
          chapterId: chapterId,
          isCompleted: true,
        },
      });
      if (!progress) {
        const studentProgress = await prisma.studentProgress.create({
          data: {
            studentId: student.wdt_ID,
            chapterId: chapterId,
            isCompleted: true,
            completedAt: new Date(),
          },
        });

        console.log("created student progress:", studentProgress?.isCompleted);
      }
      console.log(
        "Fetching next chapter after position:",
        prevChapter.position
      );
      const nextChapter = await prisma.chapter.findFirst({
        where: {
          courseId: courseId,
          position: prevChapter.position + 1,
        },
      });

      if (nextChapter) {
        console.log("Unlocking next chapter with id:", nextChapter.id);
        await prisma.chapter.update({
          where: { id: nextChapter.id, position: prevChapter.position + 1 },
          data: { isFree: true },
        });
      } else {
        const course = await prisma.course.findFirst({
          where: {
            id: courseId,
          },
        });
        const courseName = course?.title;
        const congra = `hello you have finished ${courseName} course thank you so much`;
        await sendMessage(Number(chat_id), congra);

        return congra;
      }

      console.log("you passed the exam:", chapterId);
      const passed = "you passed the exam";
      return passed;
    } else {
      noOfTrial += 1;
      if (noOfTrial == 2) {
        noOfTrial = 0;
        return await showAnswer(chapterId);
      }
      console.log("you Fail the exam:", chapterId);
      const failed = "you Failed the exam";
      return failed;
    }
  } catch (error) {
    console.error("Error unlocking next chapter:", error);
  }
}
