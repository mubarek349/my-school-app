import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
){
  try {
    const userId = "clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
    const {  ...values } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
