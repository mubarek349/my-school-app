"use client";

import {
  chapter,
  course,
  coursePackage,
  studentProgress,
} from "@prisma/client";
import { CourseSidebarItem } from "./course-sidebar-item";


import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  coursesPackage: coursePackage & {
    courses: (course & {
      chapters: (chapter & {
        studentProgress: studentProgress[] | null;
      })[];
    })[];
  };
  chat_id: string;

 

  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CourseSidebar = ({
  coursesPackage,
  chat_id,
  
  sidebar,
  setSidebar,
}: CourseSidebarProps) => {
 
  return (
    <div
      className={cn(
        "z-[100] w-80 border-r md:grid grid-rows-[auto_1fr_auto] overflow-hidden shadow-sm",
        sidebar
          ? "max-md:absolute max-md:inset-0 max-md:bg-white max-md:grid"
          : "max-md:hidden"
      )}
    >
      <div className="flex flex-col w-full overflow-auto">
        {Array.isArray(coursesPackage?.courses) &&
        coursesPackage.courses.length > 0 ? (
          coursesPackage.courses.map((course) => {
            const firstChapter = course.chapters?.[0];
            return (
              <CourseSidebarItem
                key={course.id}
                id={course.id}
                label={course.title}
                isCompleted={!!firstChapter?.studentProgress?.[0]?.isCompleted}
                courseId={course.id}
                isLocked={!!firstChapter?.studentProgress?.[0]?.isStarted}
                chat_id={chat_id}
                coursesPackageId={coursesPackage.id}
                sidebar={si}
                setSidebar={setSidebar}
              />
            );
          })
        ) : (
          <div className="p-4 text-gray-500">No courses found.</div>
        )}
      </div>
    </div>
  );
};
