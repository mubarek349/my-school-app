"use client";
import { CheckCircle, PlayCircle, Lock } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isStarted: boolean;
  chat_id: string;
  coursesPackageId: string;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isStarted,
  chat_id,
  coursesPackageId,
  setSidebar,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = isStarted ? (isCompleted ? CheckCircle : PlayCircle) : Lock;
  const isActive = pathname?.includes(id);

  const onClick = () => {
    setSidebar((prev) => !prev);
    router.push(`/en/${chat_id}/${coursesPackageId}/${courseId}/${id}`);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      disabled={!isStarted}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all hover:text-slate-600",
        "hover:bg-slate-300/20 lg:pl-8",
        isActive && "text-slate-700 bg-slate-200/20",
        "hover:bg-slate-200/20 hover:text-slate-700",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isActive && isCompleted && "bg-emerald-200/70"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-slate-700",
            isCompleted && "text-emerald-700"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transiton-all",
          isActive && "opacity-100",
          isCompleted && "border-emerald-700"
        )}
      ></div>
    </button>
  );
};
