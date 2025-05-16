import { getCourses } from "@/actions/get-courses";
import { CreatedCoursePackageList } from "@/components/teachers-course-package-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreatedCoursePackageList = async () => {
  const coursePackage = await getCourses();
  return (
    <div className="p-6 overflow-auto">
      <Link href="/teacher/create">
        <Button>Create Course</Button>
      </Link>
      <div>
        <CreatedCoursePackageList coursePackage={coursePackage} />
      </div>
    </div>
  );
};
export default CoursesPage;
// This page is protected by the middleware, so it will only be accessible to authenticated users.
