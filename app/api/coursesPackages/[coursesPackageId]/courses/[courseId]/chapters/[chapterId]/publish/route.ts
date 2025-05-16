import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: { coursePackageId: string; courseId: string; chapterId: string };
  }
) {
  try {
    // const userId = "clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
    const session = await auth();

    if (!session?.user) {
      return redirect("/"); // Ensure no further rendering occurs
    }

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/");
    // Replace with actual userId from context

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const coursePackageOwner = await prisma.coursePackage.findUnique({
      where: {
        id: params.coursePackageId,
        userId: userId,
      },
    });

    if (!coursePackageOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
    });
    if (
      !chapter ||
      !chapter.title ||
      !chapter.videoUrl ||
      !chapter.description
    ) {
      return new NextResponse("Chapter not found or missing title", {
        status: 404,
      });
    }
    const publishedChapter = await prisma.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: true,
      },
    });
    console.log("publishedChapter: ", publishedChapter);
    return NextResponse.json(publishedChapter);
  } catch (error) {
    console.log("[COURSES_CHAPTER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
