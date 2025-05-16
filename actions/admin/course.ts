// import { auth } from "@/auth";
// import prisma from "@/lib/db";
// import { isTeacher } from "@/lib/teacher";
// import { redirect } from "next/navigation";

// export async function getCoursePackages() {
//   try {
//     const session = await auth();

//     if (!session?.user) {
//       return redirect("/"); // Ensure no further rendering occurs
//     }

//     const userId = session.user.id ? session.user.id : "";
//     if (!isTeacher(userId)) return redirect("/");

//     const courses = await prisma.coursePackage.findMany({
//       where: {
//        userId:userId,
//       },
//       include: {
//         courses: {
//           where: {
//             // isPublished:true,
//           },
//           include: {
//             chapters: {
//               where: {
//                 // isPublished: true,
//               },
//             },
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return courses;
//   } catch (error) {
//     console.error("Error fetching courses with progress:", error);
//     return [];
//   }
// }
