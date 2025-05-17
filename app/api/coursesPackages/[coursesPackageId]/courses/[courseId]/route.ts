import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: { params: Promise<{ coursesPackageId: string; courseId: string }> }
) //   context: { params: { userId: string } }
{
  try {
    const { coursesPackageId } = await params;
    const { courseId } = await params;
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

    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
        packageId: coursesPackageId,
      },
      data: {
        ...values,
      },
    });
    console.log("Updated Course", updatedCourse);

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.log("[PACKAGES_cOURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
