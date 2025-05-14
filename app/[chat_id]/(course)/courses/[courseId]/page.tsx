"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getchapter } from "@/actions/getchapter";
import { DoorClosed } from "lucide-react";

function Page() {
  const params = useParams();
  const courseId = String(params.courseId);
  const chat_id = String(params.chat_id); // Ensure courseId is a string
  const [chapter, setChapter] = useState<{ id: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchChapter() {
      const chapterData = await getchapter(courseId, chat_id); // Fetch chapter data
      setChapter(chapterData);

      if (chapterData) {
        router.push(
          `/${chat_id}/courses/${courseId}/chapters/${chapterData.id}`
        );
      }
    }
    fetchChapter();
  }, [courseId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!chapter && (
        <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
          <DoorClosed className="w-16 h-16 text-red-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Course Locked
          </h1>
          <p className="text-lg text-gray-600 text-center">
            The course is currently locked. It will open soon. Stay tuned for
            updates!
          </p>
        </div>
      )}
    </div>
  );
}

export default Page;
