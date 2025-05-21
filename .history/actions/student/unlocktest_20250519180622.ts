"use server";
import sendMessage from "@/lib/bot";
import { prisma } from "@/lib/db";

export async function unlockTest(
  chatid: string,
  courseId: string,
  chapterId: string
) {
  //   let chapterId = "chapter_001";

  // Get student data with courses and ordered chapters
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chatid,
      status: { in: ["active", "notyet"] },
    },
    select: {
      wdt_ID: true,
      activePackage: {
        select: {
          id: true,
          name: true,
          courses: {
            select: {
              id: true,
              chapters: {
                select: {
                  id: true,
                  title: true,
                  position: true,
                },
                orderBy: { position: "asc" },
              },
            },
            orderBy: { order: "asc" },
          },
        },
      },
    },
  });

  if (!student?.activePackage?.courses?.length) {
    return { completed: true, message: "No courses found" };
  }

  // Get completed chapter IDs
  const currentStudentProgress = await prisma.studentProgress.findMany({
    where: {
      studentId: student?.wdt_ID,
      chapter: { course: { packageId: student?.activePackage?.id } },
    },
    select: {
      chapterId: true,
      isCompleted: true,
    },
  });

  // Include all chapter progress data, both completed and not completed
  const startedChapterIds = currentStudentProgress.map((p) => p.chapterId);

  const completedChapterIds = currentStudentProgress
    .filter((p) => p.isCompleted)
    .map((p) => p.chapterId);

  const incompleteChapterIds = currentStudentProgress
    .filter((p) => p.isCompleted === false)
    .map((p) => p.chapterId);

  // check the params chapterid if a incompleteChapterIds.if not the bellow function is not display .it display a bad unlock message only help me
  //   if (!incompleteChapterIds.includes(chapterId)) {
  //     console.log("this is a big mistake of unlock");
  //     return {
  //       error: true,
  //       message:
  //         "You tried a bad unlock. You either tried to unlock a previous chapter or attempted to unlock without following the step-by-step order.",
  //     };
  //   }

  if (incompleteChapterIds.includes(chapterId)) {
    // Only run this block if chapterId is in incompleteChapterIds
    console.log("Unlock allowed for chapter:", chapterId);
  } else {
    console.log("unlock fail chapter failed");
  }
  const sample = incompleteChapterIds[0];
  console.log("incompletedchapterid", incompleteChapterIds);
  console.log("chapterid", chapterId);

  // Go course by course, chapter by chapter
  for (const course of student.activePackage.courses) {
    for (const chapter of course.chapters) {
      if (!startedChapterIds.includes(chapter.id)) {
        // This is the first not completed chapter in the current course

        // inthis iwent update the incomplete and add progress for new
        await prisma.$transaction([
          // 1. First operation: Update Chapter 1
          prisma.studentProgress.update({
            where: {
              chapterId: sample,
              studentId_chapterId: {
                studentId: student?.wdt_ID,
                chapterId: sample,
              },
              isCompleted: false,
            },
            data: {
              isCompleted: true,
            },
          }),

          // 2. Second operation: Create Chapter 2
          prisma.studentProgress.create({
            data: {
              studentId: student?.wdt_ID,
              chapterId: chapter.id,
              isCompleted: false,
            },
          }),
        ]);
        console.log("fuad next courseid", course.id);
        console.log("fuad next chapterid", chapter.id);

        const result = {
          nextCourseId: course.id,
          nextChapterId: chapter.id,
          status: "incomplete_chapter_found",
          message: "progress is created",
        };
        console.log("UnlockTest result:", result);
        return result;
      }
    }
    // If all chapters in this course are completed, move to next course
  }

  // If we reach here, all chapters are completed, so update the last incomplete chapter as completed
  if (incompleteChapterIds.length > 0) {
    await prisma.studentProgress.update({
      where: {
        chapterId: incompleteChapterIds[0],
        studentId_chapterId: {
          studentId: student?.wdt_ID,
          chapterId: incompleteChapterIds[0],
        },
        isCompleted: false,
      },
      data: {
        isCompleted: true,
      },
    });
    const congraMessage = `Congratulations! You have completed the chapter in the package "${student?.activePackage?.name}".`;
    await sendMessage(Number(chatid), congraMessage);
  }

  // All chapters in all courses are completed
  const result = {
    completed: true,
    message: "All chapters completed",
  };

  console.log("UnlockTest result:", result);
  return result;
}
