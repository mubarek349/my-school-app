import prisma from "@/lib/db";

export async function getProgress(
  studentId: number,
  courseId: string
): Promise<{ progress: number } | null> {
  try {
    const totalChapters = await prisma.chapter.count({
      where: {
        courseId,
        // isPublished: true,
      },
      
    });


    if (totalChapters === 0) {
      return { progress: 0 };
    }

    const completedChapters = await prisma.studentProgress.count({
      where: {
        studentId:studentId,
        chapter: {
          courseId,
          isPublished: true,
        },
        isCompleted: true,
      },
    });

    const progress = Math.round((completedChapters / totalChapters) * 100);
    return { progress };
  } catch (error) {
    console.error("Error calculating progress:", error);
    return null;
  }
}
