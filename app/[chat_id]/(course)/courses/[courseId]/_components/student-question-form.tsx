"use client";
import { unlockingNextChapter } from "@/actions/unlocking-next-chapter";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface StudentQuestionFormProps {
  chapter: {
    questions: {
      id: string;
      question: string;
      questionOptions: { id: string; option: string }[];
    }[];
  } | null;
  courseId: string;
  chapterId: string;
  chat_id: string;
}

const StudentQuestionForm = ({
  chapter,
  courseId,
  chapterId,
  chat_id,
}: StudentQuestionFormProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string[]>
  >({});

  const router = useRouter();

  async function handleSubmit() {
    try {
      console.log(
        "Submitting answers for chapterId:",
        chapterId,
        "chat_id:",
        chat_id
      );
      const response = await fetch(
        `/api/courses/${courseId}/chapters/${chapterId}/submit-answers/${chat_id}`,
        {
          method: "POST",
          body: JSON.stringify(selectedAnswers),
        }
      );

      if (!response.ok) {
        console.error("Failed to submit answers. Response:", response);
        throw new Error("Failed to submit answers.");
      }
      const feedback = await unlockingNextChapter(courseId, chapterId, chat_id);

      if (feedback == "you passed the exam") {
        router.refresh();
        toast.success(`Answers submitted and ${feedback}`);
      } else if (feedback == "you Failed the exam") {
        toast.error(`Answers submitted and ${feedback}`);
      } else if (feedback == "you have finished the Course") {
        router.refresh();
        toast.success(`Congragulation!!! ${feedback}`);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error("Failed to submit answers.");
    }
  }

  const handleOptionChange = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => {
      const currentAnswers = prev[questionId] || [];
      if (currentAnswers.includes(optionId)) {
        return {
          ...prev,
          [questionId]: currentAnswers.filter((id) => id !== optionId),
        };
      } else {
        return {
          ...prev,
          [questionId]: [...currentAnswers, optionId],
        };
      }
    });
  };

  let questionNo = 1;
  return (
    <div className="mt-2">
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Chapter Questions</h2>
        {chapter?.questions.length ? (
          <div className="mt-4 space-y-4">
            {chapter.questions.map((question) => (
              <div
                key={question.id}
                className="p-4 border rounded-md bg-slate-100"
              >
                <h3 className="font-medium">
                  {questionNo++}, {question.question}
                </h3>
                <ul className="mt-2 space-y-2">
                  {question.questionOptions.map((option) => (
                    <li
                      key={option.id}
                      className="p-2 border rounded-md bg-white has-[input:checked]:bg-sky-100 has-[input:checked]:border-sky-300 has-[input:checked]:text-sky-700 "
                    >
                      <label className="flex items-center gap-x-2 ">
                        <input
                          className="hidden"
                          type="checkbox"
                          name={`question-${question.id}`}
                          value={option.id}
                          checked={
                            selectedAnswers[question.id]?.includes(option.id) ||
                            false
                          }
                          onChange={() =>
                            handleOptionChange(question.id, option.id)
                          }
                        />
                        {option.option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Button onClick={handleSubmit} className="mt-4">
              Submit Answers
            </Button>
          </div>
        ) : (
          <p className="text-sm text-slate-500 italic">
            No questions available for this chapter.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentQuestionForm;
