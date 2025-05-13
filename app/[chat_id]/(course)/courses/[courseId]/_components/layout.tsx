"use client";

import { NavbarRoutes } from "@/components/navbar-routes";
import React, { useState } from "react";
import { CourseSidebar } from "./course-sidebar";
import { chapter, course, studentProgress } from "@prisma/client";

export default function Layout({
  children,
  chat_id,
  course,
  progressCount,
  studentName,
  studentStatus,
  studentSubject,
}: {
  children: React.ReactNode;
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
}) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="h-dvh grid grid-rows-[auto_1fr] overflow-hidden">
      <NavbarRoutes
        sidebar={sidebar}
        setSidebar={setSidebar}
        chat_id={chat_id}
      />
      <div className="relative grid md:grid-cols-[auto_1fr] overflow-hidden">
        <CourseSidebar
          sidebar={sidebar}
          chat_id={chat_id}
          course={course}
          progressCount={progressCount}
          studentName={studentName}
          studentStatus={studentStatus}
          studentSubject={studentSubject}
        />
        <main className="grid overflow-auto">{children}</main>
      </div>
    </div>
  );
}
