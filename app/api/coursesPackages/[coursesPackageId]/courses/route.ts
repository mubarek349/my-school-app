import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  //   context: { params: { userId: string } }
  { params }: { params: { coursePackageId: string } }
) {
  try {
    // const userId = context.params.userId;
    // const userId = "clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
    const session = await auth();

    if (!session?.user) {
      return redirect("/"); // Ensure no further rendering occurs
    }

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/");
    // Replace with actual userId from context

    const { title } = await req.json();
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
    const lastCourseInthePackage = await prisma.course.findFirst({
      where: {
        packageId: params.coursePackageId,
      },
      orderBy: {
        order: "desc",
      },
    });

    const newPosition = lastCourseInthePackage ? lastCourseInthePackage.order + 1 : 1;
    const createdCourse = await prisma.course.create({
      data: {
        title,
        packageId: params.coursePackageId,
        order: newPosition,
      },
    });
    console.log("created Course :",createdCourse);
    return NextResponse.json(createdCourse);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
