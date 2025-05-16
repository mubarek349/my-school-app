"use client";

import { chapter, course, studentProgress } from "@prisma/client";
import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseProgress } from "@/components/course-progress";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  course: course & {
    chapters: (chapter & {
      studentProgress: studentProgress[] | null;
    })[];
  };
  progressCount: number;
  chat_id: string;

  studentName: string;
  studentStatus: string;
  studentSubject: string;

  sidebar: boolean;
}

export const CourseSidebar = ({
  course,
  progressCount,
  chat_id,

  studentName,
  studentStatus,
  studentSubject,

  sidebar,
}: CourseSidebarProps) => {
  const pathname = usePathname();
  const isCoursePage = pathname?.includes(`/${chat_id}`);

  return (
    <div
      className={cn(
        "z-[100] w-80 border-r md:grid grid-rows-[auto_1fr_auto] overflow-hidden shadow-sm",
        sidebar
          ? "max-md:absolute max-md:inset-0 max-md:bg-white max-md:grid"
          : "max-md:hidden"
      )}
    >
      <div className="p-7 flex flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>
        <div className="mt-10">
          <CourseProgress
            // variant="success"
            value={progressCount}
          />
        </div>
      </div>
      <div className="flex flex-col w-full overflow-auto">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.studentProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree}
            chat_id={chat_id}
          />
        ))}
      </div>
      <div className="p-2">
        {isCoursePage && (
          <div className="p-5 border border-slate-300 rounded-md flex flex-col gap-4 ">
            <div className="font-bold">
              <p className="text-xs text-slate-400">name</p>
              <p className="">{studentName}</p>
            </div>
            <div className="font-bold">
              <p className="text-xs text-slate-400">status</p>
              <p className="">{studentStatus}</p>
            </div>
            <div className="font-bold">
              <p className="text-xs text-slate-400">subject</p>
              <p className="">{studentSubject}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
