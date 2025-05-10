// import { chapter, course, studentProgress } from "@prisma/client";
import { NavbarRoutes } from "@/components/navbar-routes";

// interface CourseNavbarProps {
//   course: course & {
//     chapters: (chapter & {
//       studentProgress: studentProgress[] | null;
//     })[];
//   };
//   progressCount: number;
// }
// { course, progressCount }: CourseNavbarProps

interface CourseNavbarProps {
  studentName:string;
  studentStatus:string;
  studentSubject:string;  
  chat_id:string;
}
export const CourseNavbar = ({
  studentName,
  studentStatus,
  studentSubject,
  chat_id
}: CourseNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <NavbarRoutes
        studentName={studentName}
        studentStatus={studentStatus}
        studentSubject={studentSubject}
        chat_id={chat_id}
      />
    </div>
  );
};
