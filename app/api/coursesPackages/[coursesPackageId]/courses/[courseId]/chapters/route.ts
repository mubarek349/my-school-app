import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  {params}: { params: {coursePackageId: string, courseId: string } }
//   context: { params: { userId: string } }
) {
  try {
    // const userId = context.params.userId;
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

    const { title } = await req.json();

    const lastChapter = await prisma.chapter.findFirst({
      where: {  
        courseId: params.courseId,
      },
        orderBy: {
            position: "desc",
        },
    });
    
    const newPosition = lastChapter ? lastChapter.position + 1 : 1;
    const createdChapter = await prisma.chapter.create({
      data: {
        title,
        courseId: params.courseId,
        position: newPosition,
      },
    });
    console.log("createdChapter :",createdChapter);
    return NextResponse.json(createdChapter);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
