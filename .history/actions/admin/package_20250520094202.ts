"use server";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";


export async function getCoursesPackages() {
  try {
    const session = await auth();

    if (!session?.user) {
      return redirect("/"); // Ensure no further rendering occurs
    }

    const userId = session.user.id ? session.user.id : "";
    if (!isTeacher(userId)) return redirect("/");

    const coursesPackages = await prisma.coursePackage.findMany({
      where: {
        isPublished: true,
      },
      include: {
        courses: {
          where: {
            isPublished: true,
          },
          include:{
            chapters:{
              is
            }
          }
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("courses package: ", coursesPackages);
    return coursesPackages;
  } catch (error) {
    console.error("Error fetching courses with progress:", error);
    return [];
  }
}

