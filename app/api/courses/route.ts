import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
//   context: { params: { userId: string } }
) {
  try {
    // const userId = context.params.userId;
    const userId = "clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const course = await prisma.course.create({
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
