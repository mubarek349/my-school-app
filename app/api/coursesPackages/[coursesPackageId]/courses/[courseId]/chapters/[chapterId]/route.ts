import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function DELETE(
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
    if (!chapter) {
      return new NextResponse("Chapter Not found", { status: 404 });
    }
    const deletedChapter = await prisma.chapter.delete({
      where: {
        id: params.chapterId,
      },
    });

    // Check if there are any published chapters left in the course
    const publishedChaptersInCourse = await prisma.chapter.count({
      where: {
        courseId: params.courseId,
        isPublished: true,
      },
    });

    if (publishedChaptersInCourse === 0) {
      // Unpublish the course if no published chapters remain
      await prisma.course.update({
        where: {
          id: params.courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log("[ChapterID_DELETION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

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

    const { ...values } = await req.json();

    const chapter = await prisma.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
      // other update fields
    });

    // if (values.videoUrl) {
    //   const existingMuxData = await prisma.muxData.findFirst({
    //     where: {
    //       chapterId: params.chapterId,
    //     },
    //   });
    //   if (existingMuxData) {
    //     await Video.Assets.del(existingMuxData.assetId);
    //     await prisma.muxData.delete({
    //       where: {
    //         id: existingMuxData.id,
    //       },
    //     });
    //   }
    //   const asset = await Video.Assets.create({
    //     input: values.videoUrl,
    //     playback_policy: "public",
    //     test: false,
    //   });
    //   await prisma.muxData.create({
    //     data: {
    //       chapterId: params.chapterId,
    //       assetId: asset.id,
    //       playbackId: asset.playback_ids?.[0]?.id,
    //     },
    //   });
    // }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSES_CHAPTER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
