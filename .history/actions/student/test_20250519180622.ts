"use server";
import { prisma } from "@/lib/db";

// Get the chapter and questions for a student in their active package, based on given courseId and chapterId
export async function getQuestionForActivePackageChapterUpdate(
  chatId: string,
  courseid: string,
  chapterId: string
) {
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

  // 2. Find the course and chapter by the given IDs
  const course = student.activePackage.courses.find((c) => c.id === courseid);
  if (!course) {
    return { error: true, message: "Course not found in your active package." };
  }

  const chapter = course.chapters.find((ch) => ch.id === chapterId);
  if (!chapter) {
    return { error: true, message: "Chapter not found in this course." };
  }

  // 3. Get all student progress for this package
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

  // 4. Get full chapter data and questions
  const chapterData = await prisma.chapter.findUnique({
    where: { id: chapter.id },
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
    courseId: course.id,
    courseTitle: course.title,
    chapter: chapterData,
  };
  console.log(data);
  return data;
}
