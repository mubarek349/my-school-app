"use client";
import { chapter, course, coursePackage, studentProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CourseSidebar } from "./course-sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sidebar } from "../ui/sidebar";
interface CourseMobileSidebarProps {
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

export const CourseMobileSidebar = ({
  coursesPackage,
  chat_id,
  sidebar,
            setSidebar,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 bg-white"
        aria-describedby="dialog-description"
      >
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>

          {/* Add SheetDescription for screen reader users */}
          <SheetDescription
            id="dialog-description"
            className="text-sm text-muted-foreground"
          ></SheetDescription>
        </VisuallyHidden>
        <Sidebar>
          <CourseSidebar
            chat_id={chat_id}
            coursesPackage={coursesPackage}
            sidebar={sidebar}
            setSidebar={setSidebar}
          />
        </Sidebar>
      </SheetContent>
    </Sheet>
  );
};
