"use client";
import React, { useState, useEffect } from "react";
import MainMenu from "@/components/custom/main-menu";
import MenuTitle from "@/components/custom/menu-title";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {isMobile && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
          {/* Hamburger button outside Drawer */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerContent>
              <MainMenu className="w-64" />
              {/* Close button inside Drawer */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-4 py-2 bg-gray-200 rounded w-full"
              >
                Close
              </button>
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-y-auto py-2  overflow-x-hidden">
        {/* Desktop: Progress bar fixed at top, Mobile: Progress bar below menu */}
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
        <div className={`px-4 ${isMobile ? "pt-0" : "pt-10"}`}>{children}</div>
      </div>
    </div>
  );
}
