"use client";

import { NavbarRoutes } from "@/components/custom/course-navbar-routes";
import React, { useState } from "react";
import { CourseSidebar } from "@/components/custom/course-sidebar";
import {
  chapter,
  course,
  coursePackage,
  studentProgress,
} from "@prisma/client";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
  chat_id,
  progressCount,
  studentName,
  studentStatus,
  studentSubject,
  coursesPackage,
}: {
  children: React.ReactNode;
  coursesPackage: coursePackage & {
    courses: (course & {
      chapters: (chapter & {
        studentProgress: studentProgress[] | null;
      })[];
    })[];
  };
  progressCount: number;
  chat_id: string;
  studentName: string;
  studentStatus: string;
  studentSubject: string;
}) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="h-dvh grid grid-rows-[auto_1fr] overflow-hidden">
      <NavbarRoutes
        sidebar={sidebar}
        setSidebar={setSidebar}
        coursesPackage={coursesPackage}
        progressCount={progressCount}
        chat_id={chat_id}
        studentName={studentName}
        studentStatus={studentStatus}
        studentSubject={studentSubject}
      />
      <div className="relative grid md:grid-cols-[auto_1fr] overflow-hidden">
        <SidebarProvider>
          
          <CourseSidebar
            sidebar={sidebar}
            setSidebar={setSidebar}
            chat_id={chat_id}
            coursesPackage={coursesPackage}
          />
        </SidebarProvider>
        <main className="grid overflow-auto">{children}</main>
      </div>
    </div>
  );
}
