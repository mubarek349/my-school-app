import { prisma } from "@/lib/db";
import { showAnswer } from "./question";
import { correctAnswer } from "./question";

export default async function getActiveChapter(
  courseId: string,
  chapterId: string,
  chat_id: string
) {
  try {
    const activeChapter = await prisma.chapter.findFirst({
      where: {
        id: chapterId,
        courseId: courseId,
      },
      select: {
        title: true,
        description: true,
        videoUrl: true,
        questions: {
          select: {
            question: true,
            questionOptions: true,
            questionAnswer: true,
            studentQuiz: {
              select: {
                studentQuizAnswers: {
                  select: {
                    selectedOption: { select: { id: true, option: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    return activeChapter;
  } catch (error) {
    console.error("Error fetching active chapter:", error);
    throw error;
  }
}
// this function is used for unlocking the next chapter
let noOfTrial = 0;
// export async function unlockingNextChapter(
//   courseId: string,
//   chapterId: string,
//   chat_id: string
// ) {
//   try {
//     if (!chapterId || !chat_id || !courseId) {
//       console.error("Invalid input: chapterId or chat_id is missing.");
//       throw new Error("Invalid input: chapterId and chat_id are required.");
//     }

//     const student = await prisma.wpos_wpdatatable_23.findFirst({
//       where: { chat_id: chat_id },
//     });

//     if (!student?.wdt_ID) {
//       throw new Error("Student not found for the provided chat_id.");
//     }

//     const { result } = await correctAnswer(chapterId, student.wdt_ID);
//     if (!result) {
//       throw new Error("Failed to retrieve result from correctAnswer.");
//     }

//     const prevChapter = await prisma.chapter.findUnique({
//       where: { id: chapterId },
//       select: { position: true },
//     });

//     if (!prevChapter) {
//       throw new Error("Previous chapter not found.");
//     }

//     if (result.score == 1) {
//       // 1. Mark current chapter as started and completed
//       let progress = await prisma.studentProgress.findFirst({
//         where: {
//           studentId: student.wdt_ID,
//           chapterId: chapterId,
//         },
//       });
//       if (!progress) {
//         await prisma.studentProgress.create({
//           data: {
//             studentId: student.wdt_ID,
//             chapterId: chapterId,
//             isCompleted: true,
//             completedAt: new Date(),
//           },
//         });
//       } else {
//         // Update if not already completed or started
//         if (!progress.isCompleted) {
//           await prisma.studentProgress.update({
//             where: { id: progress.id },
//             data: {
//               isCompleted: true,
//               completedAt: new Date(),
//             },
//           });
//         }
//       }

//       // 2. Find next chapter
//       const nextChapter = await prisma.chapter.findFirst({
//         where: {
//           courseId: courseId,
//           position: prevChapter.position + 1,
//         },
//       });

//       if (nextChapter) {
//         // 3. Mark next chapter as started but not completed
//         let nextProgress = await prisma.studentProgress.findFirst({
//           where: {
//             studentId: student.wdt_ID,
//             chapterId: nextChapter.id,
//           },
//         });
//         if (!nextProgress) {
//           await prisma.studentProgress.create({
//             data: {
//               studentId: student.wdt_ID,
//               chapterId: nextChapter.id,
//               isCompleted: false,
//             },
//           });
//         }
//         return "you passed the exam";
//       } else {
//         // No next chapter: course finished
//         const course = await prisma.course.findFirst({
//           where: { id: courseId },
//         });
//         const courseName = course?.title;
//         const congra = `hello you have finished ${courseName} course thank you so much`;
//         return congra;
//       }
//     } else {
//       noOfTrial += 1;
//       if (noOfTrial == 3) {
//         showAnswer(chapterId);
//         noOfTrial = 0;
//       }
//       return "you Failed the exam";
//     }
//   } catch (error) {
//     console.error("Error unlocking next chapter:", error);
//     throw error;
//   }
// }

// export async function unlockingNextChapterFunction(
//   courseId: string,
//   chapterId: string,
//   chat_id: string
// ) {
//   const student = await prisma.wpos_wpdatatable_23.findFirst({
//     where: { chat_id: chat_id },
//     select: { wdt_ID: true },
//   });

//   if (!student?.wdt_ID) throw new Error("Student ID is undefined.");

//   const prevChapter = await prisma.chapter.findUnique({
//     where: { id: chapterId },
//     select: { position: true },
//   });

//   // 1. Mark current chapter as started and completed
//   let completeProgress = await prisma.studentProgress.findFirst({
//     where: {
//       studentId: student.wdt_ID,
//       chapterId: chapterId,
//     },
//   });

//   if (!completeProgress) {
//     await prisma.studentProgress.create({
//       data: { studentId: student.wdt_ID, chapterId: chapterId },
//     });
//   } else {
//     // Update if not already completed or started
//     if (!completeProgress.isCompleted || completeProgress.isStarted) {
//       await prisma.studentProgress.update({
//         where: { id: completeProgress.id },
//         data: { isCompleted: true },
//       });
//     }

//   }

//   // 2. Find the next chapter based on position
//   if (prevChapter && prevChapter.position !== undefined) {
//     const nextChapter = await prisma.chapter.findFirst({
//       where: {
//         courseId: courseId,
//         position: prevChapter.position + 1,
//       },
//     });

//     if (nextChapter) {
//       // 3. Mark next chapter as started but not completed
//       let nextProgress = await prisma.studentProgress.findFirst({
//         where: {
//           studentId: student.wdt_ID,
//           chapterId: nextChapter.id,
//         },
//       });
//       if (!nextProgress) {
//         await prisma.studentProgress.create({
//           data: {
//             studentId: student.wdt_ID,
//             chapterId: nextChapter.id,
//             isStarted: true,
//             isCompleted: false,
//           },
//         });
//       } else if (!nextProgress.isStarted) {
//         await prisma.studentProgress.update({
//           where: { id: nextProgress.id },
//           data: { isStarted: true },
//         });
//       }
//     }
//   }
// }

export async function unlockingNextChapterfuad(chat_id: string) {
  console.log("test");
  // 1. Get student and active package
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: { chat_id },
    select: { wdt_ID: true, activePackage: true },
  });
  if (!student?.wdt_ID || !student.activePackage) {
    throw new Error("Student or active package not found.");
  }
  console.log("test11");

  // 2. Get all courses in the package, ordered by position
  const packageCourses = await prisma.coursePackage.findMany({
    where: { id: student.activePackage.id },
    // orderBy: { course: { position: "asc" } },
    select: {
      courses: {
        select: {
          id: true,
          chapters: { select: { id: true }, orderBy: { position: "asc" } },
        },
        orderBy: { order: "asc" },
      },
    },
  });
  // if (!packageCourses.length) {
  //   throw new Error("No courses found in the active package.");
  // }

  console.log("test22");

  // 3. For each course, in order
  for (const pkgCourse of packageCourses) {
    const courseId = pkgCourse.courses[0].id;

    console.log("test33");
    // 4. Get all chapters for the course, ordered by position
    const chapters = await prisma.chapter.findMany({
      where: { courseId },
      orderBy: { position: "asc" },
      select: { id: true, position: true },
    });
    if (!chapters.length) continue;

    console.log("test44");

    // 5. Get student progress for these chapters
    const progress = await prisma.studentProgress.findMany({
      where: {
        studentId: student?.wdt_ID,
        chapterId: { in: chapters.map((c) => c.id) },
      },
      select: { id: true, chapterId: true, isCompleted: true },
    });

    console.log("test55 ");

    // 6. Use your algorithm to check if all chapters are completed
    const chapterIds = chapters.map((c) => c.id);
    const completedChapterIds = progress
      .filter((p) => p.isCompleted)
      .map((p) => p.chapterId);

    const allCompleted =
      chapterIds.length === completedChapterIds.length &&
      chapterIds.every((v) => completedChapterIds.includes(v));

    if (allCompleted) {
      // Move to next course
      continue;
    }

    console.log("test66");
    // 7. Find the last completed chapter in this course
    let prevChapterId: string | undefined;
    for (let i = chapters.length - 1; i >= 0; i--) {
      const chapter = chapters[i];
      const prog = progress.find(
        (p) => p.chapterId === chapter.id && p.isCompleted
      );
      if (prog) {
        prevChapterId = chapter.id;
        break;
      }
    }

    console.log("test77");
    // 8. Find the next chapter to unlock
    let nextChapter: { id: string; position: number } | undefined;
    if (prevChapterId) {
      const prevChapter = chapters.find((c) => c.id === prevChapterId);
      if (prevChapter) {
        nextChapter = chapters.find(
          (c) => c.position === prevChapter.position + 1
        );
      }
    } else {
      // If no previous completed, start from first chapter
      nextChapter = chapters[0];
    }

    console.log("test88");
    // 9. Update previous chapter progress to completed if needed
    if (prevChapterId) {
      const prevProgress = progress.find((p) => p.chapterId === prevChapterId);
      if (prevProgress && !prevProgress.isCompleted) {
        await prisma.studentProgress.update({
          where: { id: prevProgress.id },
          data: { isCompleted: true, completedAt: new Date() },
        });
      }
    }
    console.log("test88");

    // 10. Create next chapter progress if not exists
    if (nextChapter) {
      const nextProgress = progress.find(
        (p) => p.chapterId === nextChapter!.id
      );
      if (!nextProgress) {
        await prisma.studentProgress.create({
          data: {
            studentId: student.wdt_ID,
            chapterId: nextChapter.id,
            isStarted: true,
            isCompleted: false,
          },
        });
      }
    }
    console.log("test99");

    // Stop after handling the first incomplete course
    return "Chapter progress updated.";
  }

  return "All courses and chapters completed.";
}

// export async function unlockingNextChapter(
//   chat_id: string,
//   courseId: string,
//   chapterId: string
// ) {
//   // 1. Get student
//   const student = await prisma.wpos_wpdatatable_23.findFirst({
//     where: { chat_id },
//     select: { wdt_ID: true },
//   });
//   if (!student?.wdt_ID) throw new Error("Student not found.");

//   // 2. Mark current chapter as completed
//   let progress = await prisma.studentProgress.findFirst({
//     where: {
//       studentId: student.wdt_ID,
//       chapterId,

//     },
//   });

//   if (!progress) {
//     await prisma.studentProgress.create({
//       data: {
//         studentId: student.wdt_ID,
//         chapterId,
//         isCompleted: true,
//         completedAt: new Date(),
//       },
//     });
//   } else if (!progress.isCompleted) {
//     await prisma.studentProgress.update({
//       where: { id: progress.id },
//       data: {
//         isCompleted: true,
//         completedAt: new Date(),
//       },
//     });
//   }

//   // 3. Find next chapter by position
//   const currentChapter = await prisma.chapter.findUnique({
//     where: { id: chapterId },
//     select: { position: true },
//   });

//   if (!currentChapter || currentChapter.position === undefined) return;

//   const nextChapter = await prisma.chapter.findFirst({
//     where: {
//       courseId,
//       position: currentChapter.position + 1,
//     },
//     select: { id: true },
//   });

//   if (nextChapter) {
//     // 4. Mark next chapter as started (not completed)
//     let nextProgress = await prisma.studentProgress.findFirst({
//       where: {
//         studentId: student.wdt_ID,
//         chapterId: nextChapter.id,
//       },
//     });
//     if (!nextProgress) {
//       await prisma.studentProgress.create({
//         data: {
//           studentId: student.wdt_ID,
//           chapterId: nextChapter.id,
//           isStarted: true,
//           isCompleted: false,
//         },
//       });
//     } else if (!nextProgress.isStarted) {
//       await prisma.studentProgress.update({
//         where: { id: nextProgress.id },
//         data: { isStarted: true },
//       });
//     }
//   }
// }
