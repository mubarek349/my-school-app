import prisma from "@/lib/db";
import { NextResponse } from "next/server";
export async function PUT(
  req: Request,
  {params}: { params: { courseId: string } }
) {
  try {
    const userId = "clg1v2j4f0000l5v8xq3z7h4d";
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { list } = await req.json();
    const ownCourse = await prisma.course.findUnique({
      where: {
        id: params.courseId,
         userId
      },
    });
    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    for (let item of list) {
      await prisma.chapter.update({
        where: { id: item.id },
        data: { position: item.position },
      });
    }
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.log("[REORDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
