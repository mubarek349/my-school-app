"use server";
import prisma from "@/lib/db";

export async function getchapter(courseId: string) {
  console.log("course >>", courseId);
  const chapterId = await prisma.chapter.findFirst({
    where: {
      courseId: courseId,
      position: 1,
    },
    select: {
      id: true,
    },
  });
  console.log("chapterid id ", chapterId);
  if(!chapterId)return null;
  return chapterId;
}
