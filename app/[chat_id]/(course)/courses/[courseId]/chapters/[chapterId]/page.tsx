import prisma from "@/lib/db";
import React from "react";
import StudentQuestionForm from "../../_components/student-question-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function page({
  params,
}: {
  params: Promise<{ chat_id: string; courseId: string; chapterId: string }>;
}) {

  
  const chapter = await prisma.chapter.findUnique({
    where: {
      id: (await params).chapterId,
      courseId: (await params).courseId,
    },
    include: {
      questions: {
        include: {
          questionOptions: true,
        },
      },
    },
  });

  // const embedUrl = chapter?.videoUrl
  //   ? chapter.videoUrl.replace("watch?v=", "embed/")
  //   : null;

  return (
    <div className="p-3 video-container flex flex-col gap-y-3">
      {/* Responsive iframe wrapper */}
      <div
        className="relative w-full"
        style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${chapter?.videoUrl ?? ""}`}
          title="Darulkubra video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Navigation buttons */}
      
      <div className="flex flex-1/2 mt-4">
        <Button className="">
          <ChevronLeft className="w-4 h-4 m-2" />
          Previous
        </Button>
        <Button className="ml-auto">
          <ChevronRight className="w-4 h-4 m-2" />
          Next
        </Button>
      </div>

      {/* Student Question Form */}
      <StudentQuestionForm
        chapter={chapter}
        courseId={(await params).courseId}
        chapterId={(await params).chapterId}
        chat_id={(await params).chat_id}
      />
    </div>
  );
}
