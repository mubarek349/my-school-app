import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  {params}: { params: { courseId: string } }
//   context: { params: { userId: string } }
) {
  try {
    // const userId = context.params.userId;
    const userId = "clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const courseOwner = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId:userId,
        
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const lastChapter = await prisma.chapter.findFirst({
      where: {  
        courseId: params.courseId,
      },
        orderBy: {
            createdAt: "desc",
        },
    });
    
    const newPosition = lastChapter ? lastChapter.position + 1 : 1;
    const chapter = await prisma.chapter.create({
      data: {
        title,
        courseId: params.courseId,
        position: newPosition,
      },
    });
    return NextResponse.json(chapter);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
