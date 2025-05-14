"use client";
import { unlockingNextChapter } from "@/actions/unlocking-next-chapter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const [data, setData] = useState<
    {
      questionId: string;
      correctAnswers: string[];
      studentAnswers: string[];
    }[]
  >();

  const router = useRouter();

  const resetForm = () => {
    setSelectedAnswers({});
    setData(undefined);
    router.refresh();
  };

  async function handleSubmit() {
    try {
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
      } else if (feedback && typeof feedback != "string") {
        setData(feedback);
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

  const getAnswerStatus = (questionId: string, optionId: string) => {
    if (!data) return null;

    const questionData = data.find((v) => v.questionId === questionId);
    if (!questionData) return null;

    const isCorrect = questionData.correctAnswers.includes(optionId);
    const isStudentAnswer = questionData.studentAnswers.includes(optionId);

    if (isCorrect && isStudentAnswer) return "correct"; // Both correct
    if (isCorrect && !isStudentAnswer) return "missed-correct"; // Correct answer not selected
    if (!isCorrect && isStudentAnswer) return "wrong"; // Wrong answer selected

    return null;
  };

  let questionNo = 1;
  return (
    <div className="mt-2">
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Chapter Questions</h2>
          {data && (
            <Button variant="outline" onClick={resetForm} className="text-sm">
              Reset Questions
            </Button>
          )}
        </div>
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
                  {question.questionOptions.map((option) => {
                    const status = getAnswerStatus(question.id, option.id);
                    return (
                      <li
                        key={option.id}
                        className={cn(
                          "p-2 border rounded-md bg-white",
                          status === "correct" &&
                            "bg-green-100 border-green-300 text-green-700",
                          status === "wrong" &&
                            "bg-red-100 border-red-300 text-red-700",
                          status === "missed-correct" &&
                            "bg-yellow-100 border-yellow-300 text-yellow-700",
                          selectedAnswers[question.id]?.includes(option.id) &&
                            "bg-sky-100 border-sky-300"
                        )}
                      >
                        <label className="flex items-center gap-x-2">
                          <input
                            className="hidden"
                            type="checkbox"
                            name={`question-${question.id}`}
                            value={option.id}
                            checked={
                              selectedAnswers[question.id]?.includes(
                                option.id
                              ) || false
                            }
                            onChange={() =>
                              handleOptionChange(question.id, option.id)
                            }
                            disabled={!!data} // Disable inputs after submission
                          />
                          {option.option}
                          {status === "correct" && (
                            <span className="ml-auto text-green-600">
                              ✓ Correct
                            </span>
                          )}
                          {status === "wrong" && (
                            <span className="ml-auto text-red-600">
                              ✗ Wrong
                            </span>
                          )}
                          {status === "missed-correct" && (
                            <span className="ml-auto text-yellow-600">
                              ! Missed
                            </span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="flex gap-2">
              <Button onClick={handleSubmit} disabled={!!data}>
                Submit Answers
              </Button>
              {data && (
                <Button variant="outline" onClick={resetForm}>
                  Try Again
                </Button>
              )}
            </div>
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
