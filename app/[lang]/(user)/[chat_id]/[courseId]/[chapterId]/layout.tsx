import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { getProgress}from "@/actions/student/progress";
import Layout from "@/components/custom/layout";

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ chat_id: string; courseId: string; chapterId: string }>;
}) => {
  const chat_id = (await params)?.chat_id ? (await params).chat_id : "";
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chat_id,
      status: { in: ["active", "NotYet"] },
    },
  });
  const studentId = student?.wdt_ID;
  if (!studentId) {
    return redirect("/");
  }
  const studentName = student?.name ? student.name : "";
  const studentStatus = student?.status ? student.status : "";
  const studentSubject = student?.subject ? student.subject : "";
  

  const course = await prisma.course.findUnique({
    where: {
      id: (await params).courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: false,
        },
        include: {
          studentProgress: {
            where: {
              studentId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  const progressData = await getProgress(studentId, course.id);
  const progressCount = progressData ? progressData.progress : 0;

  return (
    <Layout
      chat_id={chat_id}
      course={course}
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
