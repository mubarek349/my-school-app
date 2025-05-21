"use server";
import { correctAnswer } from "@/actions/student/question";
import prisma from "@/lib/db";
import { showAnswer } from "@/actions/student/question";
import sendMessage from "@/bot";
import { redirect } from "next/navigation";
let noOfTrial = 0;
export async function unlockingNextChapter(
  coursesPackageId: string,
  courseId: string,
  chapterId: string,
  chat_id: string
) {
  try {
    if (!chapterId || !chat_id || !courseId || coursesPackageId) {
      console.error("Invalid input: chapterId or chat_id is missing.");
      throw new Error("Invalid input: chapterId and chat_id are required.");
    }

    console.log("Fetching student with chat_id:", chat_id);
    const student = await prisma.wpos_wpdatatable_23.findFirst({
      where: { chat_id: chat_id },
    });

    const studentId = student?.wdt_ID;
    if (!studentId) {
      console.error("Student not found for chat_id:", chat_id);
      return redirect("/en/");
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
      select: {
        id: true,
        position: true,
        courseId: true,
        course: { select: { packageId: true, order: true } },
      },
    });

    if (!prevChapter) {
      console.error("Previous chapter not found for id:", chapterId);
      throw new Error("Previous chapter not found.");
    }
    if (result.score == 1) {
      console.log("Updating student progress for chapterId:", chapterId);
      const prevChapterProgress = await prisma.studentProgress.findFirst({
        where: {
          chapterId: chapterId,
          studentId: studentId,
          isStarted: true,
          isCompleted: false,
        },
      });

      if (prevChapterProgress) {
        await prisma.studentProgress.update({
          where: { id: prevChapterProgress.id },
          data: {
            isCompleted: true,
            completedAt: new Date(),
          },
        });

        const lastChapter = await prisma.chapter.findFirst({
          where: {
            courseId: prevChapter.courseId,
          },
          select: {
            id: true,
            position: true,
          },
          orderBy: { position: "desc" },
        });

        if (prevChapter.id == lastChapter?.id) {
          const lastCourse = await prisma.course.findFirst({
            where: {
              packageId: prevChapter.course.packageId,
            },
            select: {
              id: true,
            },
            orderBy: {
              order: "desc",
            },
          });

          if (prevChapter.courseId == lastCourse?.id) {
          
            const congra = `hello you have finished course thank you so much`;
            await sendMessage(Number(chat_id), congra);
          } else {
            const nextCourse = await prisma.course.findFirst({
              where: {
                packageId: prevChapter.course.packageId,
                order: prevChapter.course.order + 1,
              },
              select: {
                id: true,
              },
            });
            const nextChapter = await prisma.chapter.findFirst({
              where: { courseId: nextCourse?.id },
              orderBy: { position: "asc" },
            });
            if (nextChapter)
              await prisma.studentProgress.create({
                data: {
                  studentId: studentId,
                  chapterId: nextChapter?.id,
                  isStarted: true,
                  isCompleted: false,
                },
              });
          }
        } else {
          const nextChapter = await prisma.chapter.findFirst({
            where: {
              courseId: prevChapter?.courseId,
              position: prevChapter.position + 1,
            },
          });
          if (nextChapter)
            await prisma.studentProgress.create({
              data: {
                studentId: studentId,
                chapterId: nextChapter?.id,
                isStarted: true,
                isCompleted: false,
              },
            });
        }
      }


      console.log("you passed the exam:", chapterId);
      const passed = "ፈተናዉን አልፈዋል";
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
