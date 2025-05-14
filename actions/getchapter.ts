"use server";
import prisma from "@/lib/db";

export async function getchapter(courseId: string, chat_id: string) {
  console.log("course >>", courseId);

  //   const chapters = await prisma.chapter.findMany({
  //     where: {
  //       courseId: courseId,
  //       studentProgress: {
  //         every: {
  //           student: {
  //             chat_id,
  //           },
  //         },
  //       },
  //     },
  //     select: {
  //       position: true,
  //       studentProgress: {
  //         select: {
  //           isCompleted: true,
  //         },
  //       },
  //     },
  //   });

  let chapter = await prisma.chapter.findFirst({
    where: {
      isFree: true,
      courseId: courseId,
      studentProgress: { none: { student: { chat_id } } },
    },
    select: { id: true },
  });
console.log("chapter id ",chapter);
if(!chapter){
     chapter = await prisma.chapter.findFirst({
        where: {
          isFree: true,
          courseId: courseId,
          studentProgress: { some: { student: { chat_id } } },
        },
        select: { id: true },
      });
}
  return chapter;



// const chapters = await prisma.studentProgress.findMany({
//     where: {
//       student: { chat_id },
//       chapter: {
//         courseId,
//       },
//     },
//     select: {
//       isCompleted: true,
//       chapter: { select: { position: true } },
//     },
//   });

//   const positionData = chapters.reduce((sum, chapter, index) => {
//     if (chapter.isCompleted) {
//       return sum + (index + 1); // Add 1 to the index (1-based index)
//     } else {
//       return sum; // Stop summing if a chapter is not completed
//     }
//   }, 0);

//   //   console.log("data1", chapters);
//   console.log("data2", positionData);

//   const chapterId = await prisma.chapter.findFirst({
//     where: {
//       courseId: courseId,
//       position: positionData || 1, // Use `positionData` if available, otherwise default to position 1
//     },
//     select: {
//       id: true,
//     },
//   });

//   console.log("chapterid id ", chapterId);
//   if (!chapterId) return null;
//   return chapterId;
// }
