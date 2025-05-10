import { getCourses } from "@/actions/get-courses";
import { CreatedCoursesList } from "@/components/teachers-courses-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = async () => {
   const courses = await getCourses();
  return (
    <div className="p-6 ">
      <Link href="/teacher/create">
        <Button>Create Course</Button>
      </Link>
      <div>
        <CreatedCoursesList courses={courses} />
      </div>
    </div>
  );
}
export default CoursesPage;
// This page is protected by the middleware, so it will only be accessible to authenticated users.