"use client";

import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { ConfirmModal } from "../modals/confirm-modal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ChapterActionsProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
  coursesPackageId: string;
}

export const ChapterActions = ({
  disabled,
  courseId,
  isPublished,
  coursesPackageId,
  chapterId,
}: ChapterActionsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    try {
      setIsLoading(true);
      if(isPublished){
      await axios.patch(
        `/api/coursesPackages/${coursesPackageId}/courses/${courseId}/chapters/${chapterId}/unpublish`
      );
      toast.success("chapter unpublished");
    }
    else{
        await axios.patch(
          `/api/coursesPackages/${coursesPackageId}/courses/${courseId}/chapters/${chapterId}/publish`
        );
        toast.success("chapter published");
    }
    } catch {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/coursesPackages/${coursesPackageId}/courses/${courseId}/chapters/${chapterId}`);
      toast.success("chapter deleted");
      router.refresh();
      router.push(`/en/admin/coursesPackages/${coursesPackageId}/${courseId}`);
    } catch {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm">
          <Trash className="w-4 h-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
