import { chapter, course, studentProgress } from "@prisma/client";
import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseProgress } from "@/components/course-progress";

interface CourseSidebarProps {
  course: course & {
    chapters: (chapter & {
      studentProgress: studentProgress[] | null;
    })[];
  };
  progressCount: number;
  chat_id:string;
}

export const CourseSidebar = ({
  course,
  progressCount,
  chat_id,
}: CourseSidebarProps) => {
  // const chat_id = chat_id;
  // if (!userId) {
  //   return redirect("/");
  // }

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-7 flex flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>
        <div className="mt-10">
          <CourseProgress 
          // variant="success"
          value={progressCount} />
        </div>
      </div>
      <div className="flex flex-col w-full">
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
    </div>
  );
};
