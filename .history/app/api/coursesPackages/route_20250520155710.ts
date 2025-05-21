import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
  //   context: { params: { userId: string } }
) {
  try {
    // const userId = context.params.userId;
    const session = await auth();

    if (!session?.user) {
      console.log("there is no session");
      return redirect("/"); // Ensure no further rendering occurs
    }

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/en/admin");
    // Replace with actual userId from context
    const name  = Stringawait req.json();
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    const createdCoursePackage = await prisma.coursePackage.create({
      data: {
        name,
        userId,
      },
    });
    console.log("course : ", createdCoursePackage);
    return NextResponse.json(createdCoursePackage);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
