"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import useAction from "@/hooks/useAction";
import { getActivePackageProgress } from "@/actions/student/progress";
import { useParams } from "next/navigation";

// Simple skeleton loader
function ProgressSkeleton() {
  return (
    <div className="w-[60%] mx-auto h-4 bg-gray-200 rounded animate-pulse mt-2 mb-1" />
  );
}

function MenuTitle() {
  const params = useParams();
  const chatId = String(params.chatId);

  // Use useAction at the component level
  const [progressData, , isLoading] = useAction(
    getActivePackageProgress,
    [true, (response) => console.log(response)],
    chatId
  );

  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(1); // default to 1 to avoid division by zero

  useEffect(() => {
    if (progressData && !isLoading) {
      const completedChapters = progressData.completedChapters || 0;
      const totalChapters = progressData.totalChapters || 1;
      setCompleted(completedChapters);
      setTotal(totalChapters);
      setProgress((completedChapters / totalChapters) * 100);
    }
  }, [progressData, isLoading]);

  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex items-center">
      <Image src="/logo.jpg" alt="Darulkubra" width={40} height={40} />
      {isDesktop && (
        <div className="fixed w-full shadow-md p-4 z-40">
          {isLoading ? (
            <ProgressSkeleton />
          ) : (
            <>
              <Progress value={progress} className="w-[60%] mx-auto" />
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

export default MenuTitle;
