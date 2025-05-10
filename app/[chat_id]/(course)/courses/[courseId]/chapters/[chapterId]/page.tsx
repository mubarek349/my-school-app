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
    <div className="p-3 video-container flex flex-col gap-y-3 mr-120">
      <iframe
        width="700"
        height="450"
        src={`https://www.youtube.com/embed/${chapter?.videoUrl ?? ""}`}
        title="Darulkubra video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex flex-1/2">
        <Button className="">
          <ChevronLeft className="w-4 h-4 m-2" />
          Previous
        </Button>
        <Button className="ml-auto">
          <ChevronRight className="w-4 h-4 m-2" />
          Next
        </Button>
      </div>
      <StudentQuestionForm
        chapter={chapter}
        courseId={(await params).courseId}
        chapterId={(await params).chapterId}
        chat_id={(await params).chat_id}
      />
    </div>
  );
}
