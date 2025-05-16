import { getCoursesPackages } from "@/actions/admin/package";
import { CreatedCoursePackageList } from "@/components/teachers-course-package-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const coursesPackagePage = async () => {
  const coursesPackages = await getCoursesPackages();
  return (
    <div className="p-6 overflow-auto">
      <Link href="/teacher/create">
        <Button>Create Course</Button>
      </Link>
      <div>
        <CreatedCoursePackageList coursesPackages={coursesPackages} />
      </div>
    </div>
  );
};
export default coursesPackagePage;
// This page is protected by the middleware, so it will only be accessible to authenticated users.
