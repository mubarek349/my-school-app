"use client";
import CourseData from "./course-data";
import { CoursesList } from "@/components/courses-package-list-for-student";

export default function DashboardClient({
  chat_id,
  courses,
}: {
  chat_id: string;
  courses: any;
}) {
  return (
    <div className="overflow-auto">
      <CourseData />
      <CoursesList chat_id={chat_id} courses={courses} />
    </div>
  );
}
