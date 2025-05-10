"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface CourseNavbarProps {
  studentName:string;
  studentStatus:string;
  studentSubject:string; 
  chat_id:string, 
}

export const NavbarRoutes = ({
  studentName,
  studentStatus,
  studentSubject,
  chat_id,
}: CourseNavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes(`/${chat_id}`);
  const isSearchPage = pathname === "/search";

  const onClick = () => {
    router.push("/");
  };
  return (
    <>
      {isCoursePage && (
        <div className="flex items-center">
          <span>studentName: {studentName}  </span>
          <br />
          <span>studentStatus: {studentStatus}  </span>
          <br />
          <span>studentSubject: {studentSubject}  </span>
        </div>
      )}
      {
        isSearchPage &&
          {
            /* <SearchInput /> */
          }

        // <div className="md:block flex items-center">
        //   <pre>
        //     studentName: {studentName}
        //     studentStatus: {studentStatus}
        //     studentSubject: {studentSubject}
        //   </pre>
        // </div>
      }
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Button onClick={onClick}>
            <LogOut className="w-4 h-4 mr-2" />
            <span className="text-sm">Exit</span>
          </Button>
        ) : (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher Mode
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};
