"use client";
import React from "react";
import MenuTitle from "@/components/custom/menu-title";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";
import useAction from "@/hooks/useAction";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getStudentProgressPerChapter } from "@/actions/student/progress";
import { updatePathProgressData } from "@/actions/student/progress";
import { getPackageData } from "@/actions/student/package";
import { useParams } from "next/navigation";


export default function MainMenu({ className }: { className?: string }) {
  const params = useParams();
  const chatId = String(params.chatId);
  const [ refreshProgress] = useAction(
    updatePathProgressData,
    [true, (response) => console.log(response)],
    chatId
  );

  const [data] = useAction(
    getPackageData,
    [true, (response) => console.log(response)],
    chatId
  );

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
      if (refreshProgress) {
        refreshProgress();
      }
    }
    fetchAllProgress();
  }, [refreshProgress, data, chatId]);

  // const updateCourseId
  // const updateChapterId
  return (
    <nav
      className={cn(
        " bg-muted h-full overflow-auto py-2 px-4 flex flex-col gap-4",
        className
      )}
    >
      <header className=" hidden md:block border-b dark:border-b-black border-b-zinc-200 bg ">
        <MenuTitle />
      </header>
      {/* <ul className="py-4 grow">
        <MenuItems href={`/en/${chatId}/dashboard`}>Dashboard</MenuItems>
        {progressData && (
          <MenuItems
            href={`/en/${chatId}/${progressData.chapter.course.id}/${progressData.chapter.id}`}
          >
            courses
          </MenuItems>
        )}
      </ul> */}
      {!data ? (
        <div className="flex justify-center items-center py-8">Loading...</div>
      ) : (
        <Accordion type="single" collapsible>
          <h3 className="font-bold mb-2">{data.activePackage?.name}</h3>
          {data.activePackage?.courses.map((course, idx: number) => (
            <AccordionItem key={course.id} value={`course-${course.id}`}>
              <AccordionTrigger>
                <span>{course.order}</span>
                {course.title}
              </AccordionTrigger>
              <AccordionContent>
                {course.chapters.map((chapter: any) => {
                  const isCompleted = chapterProgress?.[chapter.id];
                  const chapterLink = `/en/${chatId}/${course.id}/${chapter.id}`;
                  return (
                    // <MenuItems

                    <div
                      key={chapter.id}
                      className={cn(
                        "block p-2 hover:bg-primary hover:text-foreground hover:rounded-md hover:shadow transition-colors text-muted-foreground "
                      )}
                    >
                      <span>lesson: {chapter.position}</span>
                      <button
                        disabled={!isCompleted}
                        className={cn(
                          "text-left text-sm text-gray-700 hover:underline focus:outline-none ml-2",
                          !isCompleted
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-blue-500"
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
                      <span
                        className={cn(
                          "ml-0 px-0 py-0 rounded text-xs font-semibold",
                          isCompleted === true
                            ? ""
                            : isCompleted === false
                            ? ""
                            : ""
                        )}
                      >
                        {isCompleted === true
                          ? "🔓"
                          : isCompleted === false
                          ? "🔐"
                          : "🗝️"}
                      </span>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <footer className="flex items-center gap-2">
        {/* <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar> */}

        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
