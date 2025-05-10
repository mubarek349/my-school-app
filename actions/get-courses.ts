import prisma from "@/lib/db";
import { getProgress } from "./get-progress";



export async function getCoursesWithProgress(studentId: number) {
  try {
    const courses = await prisma.course.findMany({
      where: {
        // isPublished: true,
      },
      include: {
        chapters: {
          where: {
            // isPublished: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const coursesWithProgress = await Promise.all(
      courses.map(async (course) => {
        const progressData = await getProgress(studentId, course.id);
        return {
          ...course,
          progress: progressData ? progressData.progress : 0,
        };
      })
    );

    return coursesWithProgress;
  } catch (error) {
    console.error("Error fetching courses with progress:", error);
    return [];
  }
}

export async function getCourses() {
  try {
    const courses = await prisma.course.findMany({
      where: {
        // isPublished: true,
      },
      include: {
        chapters: {
          where: {
            // isPublished: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return courses;
  } catch (error) {
    console.error("Error fetching courses with progress:", error);
    return [];
  }
}
