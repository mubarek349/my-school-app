import Link from "next/link";
import React from "react";

interface AllCoursesPackage {
  id: string;
  title: string;
  description: string | null;
  userType:string;
  isPublished:boolean;
}

interface CreatedCoursePackageListProps {
  coursesPackages: AllCoursesPackage[];
}

export const CreatedCoursePackageList = ({
  coursesPackages,
}: CreatedCoursePackageListProps) => {
  return (
    <div className="courses-list p-5 grid grid-cols-2 gap-5">
      {coursesPackages.map((coursesPackage) => (
        <Link
          key={coursesPackage.id}
          href={`/teacher/coursesPackages/${coursesPackage.id}`}
          className="bg-gray-100 rounded-xl p-5 flex flex-col course-card"
        >
          <h2 className="text-xl font-bold">{coursesPackage.title}</h2>
        </Link>
      ))}
    </div>
  );
};
