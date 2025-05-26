"use client";
import React from "react";
import MenuTitle from "./menu-title";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";
import { CheckCircle, PlayCircle, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getStudentProgressPerChapter } from "@/actions/student/progress";
import { useParams } from "next/navigation";
import Loading from "./loading";

export default function MainMenu({
  data,
  className,
}: {
  data:
    | {
        wdt_ID: number;
        activePackage: {
          name: string;
          id: string;
          courses: {
            id: string;
            title: string;
            order: number;
            chapters: {
              id: string;
              isPublished: boolean;
              title: string;
              position: number;
            }[];
          }[];
        } | null;
      }
    | null
    | undefined;
  className?: string;
}) {
  const params = useParams();
  const chatId = String(params.chatId);

  const [chapterProgress, setChapterProgress] = React.useState<
    Record<string, boolean | null>
  >({});

  React.useEffect(() => {
    async function fetchAllProgress() {
      if (!data || !data.activePackage) return;
      const allChapters = data.activePackage.courses.flatMap(
        (course) => course.chapters
      );
      const progressEntries = await Promise.all(
        allChapters.map(async (chapter) => {
          const result = await getStudentProgressPerChapter(chapter.id, chatId);
          return [chapter.id, result?.isCompleted ?? null] as [
            string,
            boolean | null
          ];
        })
      );
      setChapterProgress(Object.fromEntries(progressEntries));
    }
    fetchAllProgress();
  }, [data, chatId]);

  return (
    <nav
      className={cn(
        "bg-sky-100 dark:bg-sky-900 h-full overflow-y-auto py-4 px-4 md:px-6 flex flex-col gap-6 shadow-lg",
        className
      )}
    >
      <header className="hidden md:block border-b border-sky-200 dark:border-sky-700 pb-4">
        <MenuTitle />
      </header>
      {!data ? (
        <div className="flex justify-center items-center py-12">
          <Loading />
        </div>
      ) : (
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-sky-800 dark:text-sky-100 mb-4 tracking-tight">
            {data.activePackage?.name}
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            {data.activePackage?.courses.map((course) => (
              <AccordionItem
                key={course.id}
                value={`course-${course.id}`}
                className="border border-sky-200 dark:border-sky-700 rounded-lg bg-gray-100 dark:bg-sky-850 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <AccordionTrigger className="px-4 py-3 text-base md:text-lg font-semibold text-sky-800 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-sky-800 rounded-t-lg">
                  <span className="text-sky-600 dark:text-sky-400 mr-2">
                    {course.order}.
                  </span>
                  {course.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2 space-y-2 rounded-b-lg">
                  {course.chapters.map((chapter) => {
                    const isCompleted = chapterProgress?.[chapter.id];
                    const chapterLink = `/en/student/${chatId}/${course.id}/${chapter.id}`;
                    return (
                      <div
                        key={chapter.id}
                        className={cn(
                          "flex items-center p-3 rounded-md transition-all duration-200 hover:bg-sky-50 dark:hover:bg-sky-800 group border border-blue-400 "
                        )}
                      >
                        <span
                          className={cn(
                            "flex items-center text-xs font-semibold",
                            isCompleted === true
                              ? "text-green-500"
                              : isCompleted === false
                              ? "text-gray-400"
                              : "text-yellow-500"
                          )}
                        >
                          {isCompleted === true ? (
                            <CheckCircle className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                          ) : isCompleted === false ? (
                            <PlayCircle className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                          ) : (
                            <Lock className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                          )}
                        </span>
                        <span className="text-sm text-sky-600 dark:text-sky-400 ">
                          Lesson {chapter.position}:
                        </span>
                        <button
                          disabled={!isCompleted}
                          className={cn(
                            "text-left text-sm md:text-base font-medium ml-2 transition-colors duration-200",
                            isCompleted
                              ? "text-sky-600 dark:text-sky-400 hover:underline"
                              : "text-slate-400 dark:text-slate-500 cursor-not-allowed"
                          )}
                          onClick={() => {
                            if (isCompleted) {
                              window.location.href = chapterLink;
                            }
                          }}
                          tabIndex={isCompleted ? 0 : -1}
                          aria-disabled={!isCompleted}
                          type="button"
                        >
                          {chapter.title}
                        </button>
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
      <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
        <LightDarkToggle className="ml-auto bg-slate-200 dark:bg-slate-800 p-2 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-200" />
      </footer>
    </nav>
  );
}
