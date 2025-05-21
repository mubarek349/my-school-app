"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useAction from "@/hooks/useAction";
import { correctAnswer } from "@/actions/student/question";
import { submitAnswers } from "@/actions/student/question";
import { getstudentId } from "@/actions/student/dashboard";
import { updatePathProgressData } from "@/actions/student/progress";
import { toast } from "sonner";
import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";

// Add these SVG icons (or use your own)
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 inline ml-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const XIcon = () => (
  <svg
    className="w-5 h-5 text-red-600 inline ml-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

interface StudentQuestionFormProps {
  chapter: {
    questions: {
      id: string;
      question: string;
      questionOptions: { id: string; option: string }[];
    }[];
  } | null;
  chatId: string;
  courseId: string;
  chapterId: string;
}

const StudentQuestionForm = ({
  chapter,
  chatId,
  courseId,
  chapterId,
}: StudentQuestionFormProps) => {
  // Now each questionId maps to an array of selected optionIds
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string[]>
  >({});
  const [showCorrect, setShowCorrect] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);
  const router = useRouter();

  const [getStudentById] = useAction(
    getstudentId,
    [true, (response) => console.log(response)],
    chatId
  );

  //  const refresh next buttom

  const [progressData, refreshProgress] = useAction(
    updatePathProgressData,
    [true, (response) => console.log("AK >> ", response)],
    chatId
  );

  React.useEffect(() => {
    if (progressData) {
      // Do something with progressData
    }
  }, [progressData]);

  const studentIdString = String(getStudentById) || "";

  const [, data] = useAction(submitAnswers, [
    ,
    (response) => console.log(response),
  ]);

  async function fetchCorrectAnswers() {
    const res = await correctAnswer(chapterId, Number(studentIdString));
    setFeedback(res);
  }

  // Handle checkbox change
  const handleOptionChange = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => {
      const prevSelected = prev[questionId] || [];
      if (prevSelected.includes(optionId)) {
        // Remove if already selected
        return {
          ...prev,
          [questionId]: prevSelected.filter((id) => id !== optionId),
        };
      } else {
        // Add if not selected
        return {
          ...prev,
          [questionId]: [...prevSelected, optionId],
        };
      }
    });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowCorrect(false);
    setFeedback(null);
  };

  async function handleSubmit() {
    if (!chapter) return;
    // Transform selectedAnswers into an array of { questionId, answerId }
    const answers = Object.entries(selectedAnswers).flatMap(
      ([questionId, answerIds]) =>
        answerIds.map((answerId) => ({
          questionId,
          answerId,
        }))
    );

    try {
      await data(answers, chatId, courseId, chapterId);
      toast.success("Answers submitted!");
      await fetchCorrectAnswers();
      setShowCorrect(true);
      toast.success("Next chapter unlocked!");
      refreshProgress?.();
    } catch (e) {
      console.log(e);
      toast.error("Failed to submit answers.");
    }
  }

  let questionNo = 1;
  const allAnswered =
    chapter?.questions.every(
      (q) => selectedAnswers[q.id] && selectedAnswers[q.id].length > 0
    ) ?? false;

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
                  {questionNo++}. {question.question}
                </h3>
                <ul className="mt-2 space-y-2">
                  {question.questionOptions.map((option) => {
                    let optionClass = "p-2 border rounded-md bg-white";
                    const answered = showCorrect && feedback;
                    const isSelected = (
                      selectedAnswers[question.id] || []
                    ).includes(option.id);
                    const isStudentSelected = feedback?.studentResponse?.[
                      question.id
                    ]?.includes(option.id);
                    const isCorrectOption = feedback?.questionAnswers?.[
                      question.id
                    ]?.includes(option.id);

                    // Enhanced feedback coloring and icon logic
                    let icon = null;
                    if (answered) {
                      if (isStudentSelected && isCorrectOption) {
                        optionClass +=
                          " bg-green-200 border-green-600 text-green-900 font-semibold";
                        icon = <CheckCircle2Icon />;
                      } else if (isStudentSelected && !isCorrectOption) {
                        optionClass +=
                          " bg-red-200 border-red-600 text-red-900 font-semibold";
                        icon = <XIcon />;
                      } else if (!isStudentSelected && isCorrectOption) {
                        optionClass +=
                          " bg-yellow-50 border-yellow-400 text-green-700";
                        icon = <CheckIcon />;
                      } else {
                        optionClass += " bg-default-50";
                      }
                    } else {
                      if (isSelected) {
                        optionClass += " border-blue-400";
                      }
                    }

                    return (
                      <li key={option.id} className={optionClass}>
                        <label className="flex items-center gap-x-2">
                          <input
                            type="checkbox"
                            name={`question-${question.id}`}
                            value={option.id}
                            checked={isSelected}
                            onChange={() =>
                              handleOptionChange(question.id, option.id)
                            }
                            disabled={showCorrect}
                          />
                          {option.option}
                          {answered && icon}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered || showCorrect}
              >
                Submit Answers
              </Button>
              <Button
                variant="outline"
                onClick={handleReset}
                disabled={!showCorrect}
              >
                Reset
              </Button>
              {showCorrect && feedback?.result?.score === 1 ? (
                <Button asChild>
                  <Link
                    href={`/en/${chatId}/${progressData?.chapter?.course?.id}/${progressData?.chapter?.id}`}
                  >
                    Next
                  </Link>
                </Button>
              ) : showCorrect && feedback?.result?.score !== 1 ? (
                <div className="text-red-600 font-semibold flex items-center">
                  You failed the exam. Please try again.
                </div>
              ) : null}
            </div>
            {showCorrect && feedback?.result && (
              <div className="mt-6 p-4 rounded bg-slate-50 border text-center">
                <div>
                  <b>Score:</b> {feedback.result.score * 100}%
                </div>
                <div>
                  <b>Correct:</b> {feedback.result.correct} /{" "}
                  {feedback.result.total}
                </div>
              </div>
            )}
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
