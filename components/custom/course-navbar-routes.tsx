"use client";

import { Button } from "@/components/ui/button";
import { AlignLeft, LogOut, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CourseProgress } from "../course-progress";
import { coursePackage } from "@prisma/client";

interface CourseNavbarProps {
  chat_id: string;
  progressCount: number;
  coursesPackage: coursePackage;
  sidebar: boolean;
  studentName: string;
  studentStatus: string;
  studentSubject: string;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarRoutes = ({
  chat_id,
  coursesPackage,
  progressCount,
  sidebar,
  studentName,
  studentStatus,
  studentSubject,

  setSidebar,
}: CourseNavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminPage = pathname?.startsWith("/en/admin");
  const isCoursePage = pathname?.includes(`/${chat_id}`);

  const lang = "en";
  const onClick = () => {
    router.push(`/${lang}`);
  };

  return (
    <nav className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md flex gap-2">
      <Button
        className="md:hidden"
        onClick={() => {
          setSidebar((prev) => !prev);
        }}
      >
        {sidebar ? <X className="size-4" /> : <AlignLeft className="size-4" />}
      </Button>

      {/* <div className="flex-1"></div> */}
      <div className="p-7 flex flex-col border-b">
        <h1 className="font-semibold">{coursesPackage?.name}</h1>
        <div className="mt-10">
          <CourseProgress
            // variant="success"
            value={progressCount}
          />
        </div>
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
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isCoursePage ? (
          <Button
            onClick={onClick}
            className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Exit</span>
          </Button>
        ) : (
          <Link href={`/${lang}/admin/coursesPackages`}>
            <Button
              size="sm"
              variant="ghost"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Teacher Mode
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
