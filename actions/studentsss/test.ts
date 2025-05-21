"use server";
import { prisma } from "@/lib/db";

// Get the next chapter for a student in their active package, with all questions and options
export async function getQuestionsForActivePackageLastChapter(chatId: string) {
  // 1. Get student and active package with courses and chapters
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chatId,
      status: { in: ["active", "notyet"] },
    },
    select: {
      wdt_ID: true,
      activePackage: {
        select: {
          id: true,
          name: true,
          userType: true,
          courses: {
            select: {
              id: true,
              title: true,
              order: true,
              chapters: {
                select: {
                  id: true,
                  title: true,
                  position: true,
                  videoUrl: true,
                  isPublished: true,
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

  if (!student || !student.activePackage) {
    throw new Error("Student or active package not found.");
  }

  // 2. Get all student progress for this package
  const studentProgress = await prisma.studentProgress.findMany({
    where: {
      student: { chat_id: chatId },
      chapter: {
        course: { packageId: student.activePackage.id },
      },
    },
    select: { chapterId: true },
  });
  const completedChapterIds = studentProgress.map((p) => p.chapterId);

  // 3. Find the next chapter to work on, course by course (by order), chapter by chapter (by position)
  let nextChapter = null;
  let currentCourse = null;

  for (const course of student.activePackage.courses) {
    const courseChapterIds = course.chapters.map((ch) => ch.id);

    // If all chapters in this course are completed, move to next course
    const allChaptersDone =
      courseChapterIds.length > 0 &&
      courseChapterIds.length ===
        courseChapterIds.filter((id) => completedChapterIds.includes(id))
          .length &&
      courseChapterIds.every((v) => completedChapterIds.includes(v));

    if (allChaptersDone) {
      continue; // jump to next course
    }

    // Otherwise, find the first incomplete chapter in this course (by position)
    for (const chapter of course.chapters) {
      if (!completedChapterIds.includes(chapter.id)) {
        nextChapter = chapter;
        currentCourse = course;
        break;
      }
    }
    if (nextChapter) break; // stop at the first incomplete chapter in the first incomplete course
  }

  // If all chapters are done, return a message
  if (!nextChapter) {
    return { message: "All chapters in the package are completed!" };
  }

  // 4. Get full chapter data and questions
  const chapterData = await prisma.chapter.findUnique({
    where: { id: nextChapter.id },
    select: {
      id: true,
      title: true,
      description: true,
      videoUrl: true,
      position: true,
      questions: {
        select: {
          id: true,
          question: true,
          questionOptions: { select: { id: true, option: true } },
        },
      },
    },
  });

  // 5. Calculate package progress (doneChapters/totalChapters)
  const allChapters = student.activePackage.courses.flatMap((course) =>
    course.chapters.map((ch) => ch.id)
  );
  const totalChapters = allChapters.length;
  const doneChapters = completedChapterIds.length;

  const data = {
    packageId: student.activePackage.id,
    packageName: student.activePackage.name,
    packageProgress: `${doneChapters}/${totalChapters}`,
    courseId: currentCourse?.id,
    courseTitle: currentCourse?.title,
    chapter: chapterData,
  };
  console.log(data);
  return data;
}
