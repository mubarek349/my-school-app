import prisma from "@/lib/db";
import { getProgress } from "./get-progress";

// let inProgressCourses = 0;
// let completedCourses = 0;

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

// export async function getCoursesData(studentId: number) {
//   const courses = await prisma.course.findMany({
//     where: {
//       // isPublished: true,
//     },
//     include: {
//       chapters: {
//         where: {
//           // isPublished: true,
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   const coursesWithProgress = await Promise.all(
//     courses.map(async (course) => {
//       const progressData = await getProgress(studentId, course.id);
//       const progress=progressData;
//       if (progress > 0) {
//         inProgressCourses+=1;
//       } else if (progressData == 100) {completedCourses += 1;}

//       return {inProgressCourses,completedCourses};
//     })
//   );

//   // const studentprogress = await prisma.studentProgress.count({
//   //   where: {
//   //     studentId,
//   //     chapter: {
//   //       courseId,
//   //     },
//   //     isCompleted: true,
//   //   },
//   // });

//   return coursesWithProgress;
// }
