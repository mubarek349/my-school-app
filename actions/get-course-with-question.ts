import prisma from "@/lib/db";

export async function getChapterWithQuestion(courseId:string,chapterId:string) {
await prisma.chapter.findUnique({
  where: {
    id: chapterId,
    courseId: courseId,
  },
  include: {
    questions: {
      include: {
        questionOptions: true,
      },
    },
  },
});
}