import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { getProgress } from "@/actions/student/progress";
import Layout from "@/app/[lang]/(user)/[chat_id]/[coursesPackageId]/layout";

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    chat_id: string;
    coursesPackageId: string;
    courseId: string;
    chapterId: string;
  }>;
}) => {
  const { chat_id } = await params;
  // const { courseId } = await params;
  // const { chapterId } = await params;
  const { coursesPackageId } = await params;

  const coursesPackage = await prisma.coursePackage.findUnique({
    where: {
      id: coursesPackageId,
      isPublished: true,
    },
    include: {
      courses: {
        where: {
          isPublished: true,
        },
        include: {
          chapters: {
            where: {
              isPublished: true,
            },
            include: {
              studentProgress: {
                where: {
                  // studentId
                },
              },
            },
          },
        },
      },
    },
  });

  if (!coursesPackage) {
    return redirect("/");
  }
  let student;
  if (coursesPackage.userType == "GENERAL") {
    const generalStudent = await prisma.wpos_wpdatatable_23.findFirst({
      where: {
        chat_id: chat_id,
        status: { in: ["active", "NotYet"] },
      },
    });
    student = generalStudent;
  } else {
    const restrictedStudent = await prisma.wpos_wpdatatable_23.findFirst({
      where: {
        chat_id: chat_id,
        status: { in: ["active", "NotYet"] },
        subject: coursesPackage.userType,
      },
    });
    student = restrictedStudent;
  }

  if (
    coursesPackage.userType != "GENERAL" &&
    student?.subject != coursesPackage.userType
  ) {
    return redirect("/");
  }
  const studentId = student?.wdt_ID;
  if (!studentId) {
    return redirect("/");
  }

  const studentName = student?.name ? student.name : "";
  const studentStatus = student?.status ? student.status : "";
  const studentSubject = student?.subject ? student.subject : "";

  const progressData = await getProgress(studentId, coursesPackage?.id);
  const progressCount = progressData ? progressData.progress : 0;

  return (
    <Layout
      chat_id={chat_id}
      coursesPackage={coursesPackage}
      progressCount={progressCount}
      studentName={studentName}
      studentStatus={studentStatus}
      studentSubject={studentSubject}
    >
      {children}
    </Layout>
  );
};

export default CourseLayout;
