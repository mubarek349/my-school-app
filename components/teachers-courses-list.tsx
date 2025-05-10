import Link from "next/link";
import React from "react";

interface AllCourses {
  id: string;
  title: string;
  description: string | null;
}

interface CoursesForTeacher {
  courses: AllCourses[];
}

export const CreatedCoursesList = ({ courses }: CoursesForTeacher) => {
  return (
    <div className="courses-list p-5 grid grid-cols-2 gap-5">
      {courses.map((course) => (
        <Link
          key={course.id}
          href={`/teacher/courses/${course.id}`}
          className="bg-gray-100 rounded-xl p-5 flex flex-col course-card"
        >
          <h2 className="text-xl font-bold">{course.title}</h2>
        </Link>
      ))}
    </div>
  );
};
