"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import useAction from "@/hooks/useAction";
import { correctAnswer } from "@/actions/student/question";
import { submitAnswers } from "@/actions/student/question";
import { getstudentId } from "@/actions/student/dashboard";
import { updatePathProgressData } from "@/actions/student/progress";
import { toast } from "sonner";
import { CheckCircle2Icon, Loader2 } from "lucide-react";
import Link from "next/link";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { useMainMenu } from "@/app/[lang]/(user)/student/layout";
import AnimatedCircularProgress from "../animatedcountdownprogress";

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
  interface Feedback {
    studentResponse?: Record<string, string[]>;
    questionAnswers?: Record<string, string[]>;
    result?: {
      score: number;
      correct: number;
      total: number;
    };
  }

  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const [getStudentById] = useAction(
    getstudentId,
    [true, (response) => console.log(response)],
    chatId
  );
  // const isMobile = useMediaQuery("(max-width: 1440px)");

  //  const refresh next buttom

  const [progressData, refreshProgress] = useAction(
    updatePathProgressData,
    [true, (response) => console.log(response)],
    chatId
  );

  const [count, setCount] = useState(15);

  useEffect(() => {
    if (showCorrect && feedback?.result?.score !== 1) {
      if (count === 0) {
        setCount(15);
        return setShowCorrect(false);
      } // Stop at 0

      const timer = setInterval(() => {
        setCount((prev) => (prev >= 1 ? prev - 1 : prev));
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval
    }
  }, [count, showCorrect, feedback]);

  // useEffect(() => {
  //   if (showCorrect && feedback?.result?.score !== 1) {
  //     const timer = setTimeout(() => {
  //       setShowCorrect(false);
  //     }, 15000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showCorrect, feedback]);

  React.useEffect(() => {
    if (progressData) {
      // Do something with progressData
    }
  }, [progressData]);

  const studentIdString = String(getStudentById) || "";

  const [, data, submitloading] = useAction(submitAnswers, [
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

  // const handleReset = () => {
  //   setSelectedAnswers({});
  //   setShowCorrect(false);
  //   setFeedback(null);
  // };

  const { refresh } = useMainMenu();

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
      refresh();
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
    <div className="overflow-hidden flex flex-col ">
      <h2 className="py-5 text-xl font-semibold text-sky-900">
        Chapter Questions
      </h2>
      {chapter?.questions.length ? (
        <div
          className="mb-25 space-y-2 flex-1 
              max-md:overflow-y-auto md:h-svh "
        >
          {chapter.questions.map((question) => (
            <div
              key={question.id}
              className="p-2 pl-4 border rounded-md bg-gray-100 text-blue-900 dark:bg-slate-800 md:mr-100"
            >
              <h3 className="font-medium">
                {questionNo++}. {question.question}
              </h3>
              <ul className="mt-2 space-y-2">
                {question.questionOptions.map((option) => {
                  let optionClass =
                    " p-2 border rounded-md dark:bg-slate-800 text-blue-900";
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
                      optionClass +=
                        " border-sky-700 bg-sky-300/10 text-green-500 font-semibold";
                    }
                  }

                  return (
                    <li key={option.id} className={optionClass}>
                      <label className="flex items-center gap-x-2">
                        <input
                          type="checkbox"
                          className="hidden rounded"
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

          <div className="gap-4 m-3">
            <Button
              onClick={handleSubmit}
              disabled={!allAnswered || showCorrect || submitloading}
            >
              {submitloading ? <Loader2 className="animate-spin mr-2" /> : null}
              Submit Answers
            </Button>

            {/* <Button
                variant="outline"
                onClick={handleReset}
                disabled={!showCorrect}
              >
                Reset
              </Button> */}
            {showCorrect && feedback?.result?.score === 1 ? (
              <Button className="ml-5" asChild>
                <Link
                  href={`/en/student/${chatId}/${progressData?.chapter?.course?.id}/${progressData?.chapter?.id}`}
                >
                  Next
                </Link>
              </Button>
            ) : showCorrect && feedback?.result?.score !== 1 ? (
              <div className="text-red-600 font-semibold flex items-center">
                ፈተናውን ወድቀዋል፡፡መልሱ በመታየት ላይ ነው፡፡ በስክሪኑ ላይ የሚመለከቱት ሰከንድ እንዳለቀ ደግመው
                ይሞክሩ፡፡
                <AnimatedCircularProgress count={count} />
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
  );
};

export default StudentQuestionForm;
