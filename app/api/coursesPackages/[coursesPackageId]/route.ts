import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";

export async function PATCH(
  req: Request,
  { params }: { params: { coursePackageId: string } }
) {
  try {
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
        id: params.coursePackageId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return new Response(JSON.stringify(updatedCoursePackage), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating course:", error);
  }
}
