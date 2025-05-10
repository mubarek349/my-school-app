import { chapter, course, studentProgress } from "@prisma/client";
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
interface CourseMobileSidebarProps {
  course: course & {
    chapters: (chapter & {
      studentProgress: studentProgress[] | null;
    })[];
  };
  progressCount: number;
  chat_id: string;
}

export const CourseMobileSidebar = ({
  course,
  progressCount,
  chat_id,
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
        <CourseSidebar
          chat_id={chat_id}
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  );
};
