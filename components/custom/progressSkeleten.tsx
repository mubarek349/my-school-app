"use client";
import React, { useState, useEffect } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useParams } from "next/navigation";
import useAction from "@/hooks/useAction";
import { getActivePackageProgress } from "@/actions/student/progress";
import { Progress } from "@/components/ui/progress";

// Skeleton loader for progress bar
function ProgressSkeleton() {
  return (
    <div className="w-[60%] mx-auto h-4 bg-gray-200 rounded animate-pulse mb-2" />
  );
}

export default function ProgressPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(1); // set to 1 to avoid division by zero

  // UseAction for progress data
  const [progressData, , isLoading] = useAction(
    getActivePackageProgress,
    [true, (response) => console.log(response)],
    String(useParams().chatId)
  );

  useEffect(() => {
    if (progressData && !isLoading) {
      const completedChapters = progressData.completedChapters || 0;
      const totalChapters = progressData.totalChapters || 1;
      setCompleted(completedChapters);
      setTotal(totalChapters);
      setProgress((completedChapters / totalChapters) * 100);
    }
  }, [progressData, isLoading]);

  return (
    <div className="overflow-y-auto py-2  overflow-x-hidden">
      {/* Desktop: Progress bar fixed at top, Mobile: Progress bar below menu */}
      {isMobile && (
        <div className=" w-full shadow-accent ml-auto z-40">
          {isLoading ? (
            <ProgressSkeleton />
          ) : (
            <>
              <Progress value={progress} className="w-[60%] mx-auto " />
              {/* <div className="text-green-500 text-sm text-center mt-1">
                  {completed} / {total}
                </div> */}
            </>
          )}
        </div>
      )}
      {!isMobile && (
        <div className="fixed top-0 w-dvw shadow-md p-4 z-40 bg-background ">
          {isLoading ? (
            <ProgressSkeleton />
          ) : (
            <>
              <Progress value={progress} className="w-[60%] mx-auto mb-2" />
              <div className="text-green-500 text-sm text-center mt-1">
                {completed} / {total}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
