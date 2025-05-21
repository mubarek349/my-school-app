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
    params: Promise<{ coursesPackageId: string }>;
  }
) {
  try {
    const { coursesPackageId } = await params;
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
        id: coursesPackageId,
        userId: userId,
      },
    });

    if (!coursePackageOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const coursesPackage = await prisma.coursePackage.findUnique({
      where: {
        id: coursesPackageId,
      },
    });
    if (
      !coursesPackage ||
      !coursesPackage.title ||
      !coursesPackage.description
    ) {
      return new NextResponse("Chapter not found or missing title", {
        status: 404,
      });
    }
    const publishedCoursesPackage = await prisma.coursePackage.update({
      where: {
        id: coursesPackageId,
        courses:{ some: { isPublished: true }},
      },
      data: {
        isPublished: true,
      },
    });
    console.log("publishedCourse: ", publishedCoursesPackage);
    return NextResponse.json(publishedCoursesPackage);
  } catch (error) {
    console.log("[publishedCourse]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
