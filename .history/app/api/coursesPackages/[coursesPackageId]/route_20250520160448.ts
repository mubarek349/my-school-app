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
    params: Promise<{
      coursesPackageId: string;
    }>;
  }
) {
  try {
    const { coursesPackageId } = await params;

    const session = await auth();
    if (!session?.user) return redirect("/");

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/");

    // Check course package ownership
    const coursePackageOwner = await prisma.coursePackage.findUnique({
      where: {
        id: coursesPackageId,
        userId,
      },
    });

    if (!coursePackageOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if coursespackage exists
    const coursesPackage = await prisma.coursePackage.findUnique({
      where: {
        id: coursesPackageId,
      },
    });
    if (!coursesPackage) {
      return new NextResponse("coursesPackage Not found", { status: 404 });
    }

    // Delete the coursesPackage
    const deletedcoursesPackage = await prisma.coursePackage.delete({
      where: {
        id: coursesPackageId,
      },
    });

    return NextResponse.json(deletedcoursesPackage);
  } catch (error) {
    console.log("[coursesPackageID_DELETION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ coursesPackageId: string }> }
) {
  try {
    const { coursesPackageId } = await params;
    // ...existing code...
    // const {userId} = auth();

    const session = await auth();

    if (!session?.user) {
      return redirect("/"); // Ensure no further rendering occurs
    }

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/");

    // const  userId ="clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context

    const values = await req.json();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const updatedCoursePackage = await prisma.coursePackage.update({
      where: {
        id: StringcoursesPackageId,
      },
      data: {
        ...values,
      },
    });
    console.log("the updated Package is  : ", updatedCoursePackage);
    return NextResponse.json(updatedCoursePackage);
  } catch (error) {
    console.error("Error updating course:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
