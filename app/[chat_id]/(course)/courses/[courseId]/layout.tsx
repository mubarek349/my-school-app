import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import { getProgress } from "@/actions/get-progress";

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ chat_id: string; courseId: string; chapterId: string }>;
}) => {
  const chat_id = (await params)?.chat_id?(await params).chat_id:"";
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chat_id,
      status: { in: ["active", "Not Yet"] },
    },
  });
  const studentId = student?.wdt_ID;
  const studentName= student?.name? student.name:"";
  const studentStatus=student?.status? student.status:"";
const studentSubject = student?.subject? student.subject:"";
  if (!studentId) {
    return redirect("/");
  }

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
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar
          studentName={studentName}
          studentStatus={studentStatus}
          studentSubject={studentSubject}
          chat_id={chat_id}
        />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar
          chat_id={chat_id}
          course={course}
          progressCount={progressCount}
        />
      </div>
      <main className="md:pl-80 h-full pt-[80px]">{children}</main>
    </div>
  );
};

export default CourseLayout;
