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
    params: { coursePackageId: string; courseId: string };
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
    const course = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        packageId: params.coursePackageId,
      },
    });
    if (!course || !course.title || !course.description) {
      return new NextResponse("Chapter not found or missing title", {
        status: 404,
      });
    }
    const publishedCourse = await prisma.course.update({
      where: {
        id: params.courseId,
        packageId: params.coursePackageId,
      },
      data: {
        isPublished: true,
      },
    });
    console.log("publishedCourse: ", publishedCourse);
    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log("[publishedCourse]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
