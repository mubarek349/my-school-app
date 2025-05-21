"use client";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useAction from "@/hooks/useAction";
import { getQuestionForActivePackageChapterUpdate } from "@/actions/student/test";
import StudentQuestionForm from "@/components/custom/StudentQuestionForm";
import { packageCompleted } from "@/actions/student/progress";
import { noProgress } from "@/actions/student/progress";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import confetti from "canvas-confetti";

function Page() {
  const params = useParams();
  const chatId = String(params.chatId);
  const chapterId = String(params.chapterId);
  const courseId = String(params.courseId);
  const coursedata = String(params.courseId);

  const [data, , isLoading] = useAction(
    getQuestionForActivePackageChapterUpdate,
    [true, (response) => console.log(response)],
    chatId,
    courseId,
    chapterId
  );
  const [progressData, refreshProgress, isLoadingProgress] = useAction(
    noProgress,
    [true, (response) => console.log(response)],
    chatId,
    courseId
  );

  // Confetti and toast on package complete
  React.useEffect(() => {
    async function checkPackage() {
      const completed = await packageCompleted(chatId);
      if (completed) {
        toast.success("🎉 Congratulations! You have completed the package.", {
          duration: 5000,
        });

        // Confetti side cannons
        const end = Date.now() + 2 * 1000;
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
        const frame = () => {
          if (Date.now() > end) return;
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors,
          });
          requestAnimationFrame(frame);
        };
        frame();
      }
    }
    checkPackage();
    // Only run on mount or when chatId changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  // --- NEW: Show "package not started" if noProgress is true ---
  if (progressData === true) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <svg
          className="w-16 h-16 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
          />
        </svg>
        <span className="text-2xl font-bold text-blue-700 mb-2">
          Package is not started!
        </span>
        <span className="text-lg text-gray-600 mb-4 text-center">
          Please go to our Telegram bot to start your package.
        </span>
        <a
          href="https://t.me/MubareksBot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go to Telegram
        </a>
      </div>
    );
  }

  return (
    <div className="p-3 video-container flex flex-col gap-y-3 z-50">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              {data && "packageName" in data ? data.packageName : "Package"}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              {data && "packageName" in data ? data.courseTitle : "courseName"}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {data && "packageName" in data
                ? data.chapter?.title
                : "chapterName"}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Responsive iframe wrapper */}
      <div
        className="relative w-full"
        style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
      >
        {isLoading ? (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
            <div className="animate-pulse w-4/5 h-4/5 bg-gray-300 rounded-lg" />
          </div>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={
              data && "chapter" in data && data.chapter?.videoUrl
                ? `https://www.youtube.com/embed/${data.chapter.videoUrl}`
                : ""
            }
            title="Darulkubra video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div>
        {isLoading ? (
          <div className="space-y-4">
            <div className="animate-pulse flex flex-col gap-4">
              <div className="h-6 bg-gray-200 rounded w-1/3" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-10 bg-gray-200 rounded w-full mt-4" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
          </div>
        ) : !data ? (
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
            <span className="text-2xl font-semibold text-gray-700 mb-2">
              No data found
            </span>
            <span className="text-gray-500 text-center mb-4">
              We couldn't find any information for this chapter. <br />
              Please check back later or contact support if you think this is a
              mistake.
            </span>
          </div>
        ) : "message" in data ? (
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-center text-xl font-bold text-green-700">
              {data.message}
            </span>
          </div>
        ) : (
          data.chapter &&
          Array.isArray(data.chapter.questions) && (
            <StudentQuestionForm
              chapter={{
                questions: data.chapter.questions,
              }}
              chatId={chatId}
              courseId={coursedata}
              chapterId={data.chapter.id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Page;
