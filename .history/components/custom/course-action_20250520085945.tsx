"use client";

import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { ConfirmModal } from "../modals/confirm-modal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CourseActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
  coursesPackageId: string;
}

export const CourseActions = ({
  disabled,
  courseId,
  isPublished,
  coursesPackageId,
}: CourseActionsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    try {
      setIsLoading(true);
      if (isPublished) {
        await axios.patch(
          `/api/coursesPackages/${coursesPackageId}/courses/${courseId}/unpublish`
        );
        toast.success("course unpublished");
        router.refresh();
      } else {
       await axios.patch(
          `/api/coursesPackages/${coursesPackageId}/courses/${courseId}/publish`
        );
        // if(!successed)
        // toast.error("it is not publish");
        toast.success("course published");
        
        router.refresh();
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
      await axios.delete(
        `/api/coursesPackages/${coursesPackageId}/courses/${courseId}`
      );
      toast.success("course deleted");
      router.refresh();
      router.push(`/en/admin/coursesPackages/${coursesPackageId}`);
    } catch {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex gap-x-1">
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
