import { getCoursesWithProgress } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

const SearchPage = async ({
  params,
}: {
  params: Promise<{ chat_id: string; courseId: string; chapterId: string }>;
}) => {
  const chat_id = (await params).chat_id;
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chat_id,
      status: { in: ["active", "notyet"] },
    },
  });
  const studentId = student?.wdt_ID;

  if (!studentId) {
    return redirect("/");
  }
  const courses = await getCoursesWithProgress(studentId);

  return (
    <div>
      <h1>Your Courses</h1>
      <CoursesList chat_id={chat_id} courses={courses} />
    </div>
  );
};

export default SearchPage;
