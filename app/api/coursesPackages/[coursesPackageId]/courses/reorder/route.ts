import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export async function PUT(
  req: Request,
  { params }: { params: { coursePackageId: string } }
) {
  try {
    // const userId = "clg1v2j4f0000l5v8xq3z7h4d";
    const session = await auth();

    if (!session?.user) {
      return redirect("/"); // Ensure no further rendering occurs
    }

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/");

    // const  userId ="clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { list } = await req.json();
    const coursePackageOwner = await prisma.coursePackage.findUnique({
      where: {
        id: params.coursePackageId,
        userId: userId,
      },
    });

    if (!coursePackageOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    for (const item of list) {
      await prisma.course.update({
        where: { id: item.id },
        data: { order: item.position },
      });
    }
    return new NextResponse("successfully Course Reorded", { status: 200 });
  } catch (error) {
    console.log("[REORDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
