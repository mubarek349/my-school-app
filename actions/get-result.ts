"use server";
import prisma from "@/lib/db";

export async function correctAnswer(chapterId: string, studentId: number) {
  try {
    console.log("Fetching questions for chapterId:", chapterId);
    const questions = await prisma.question.findMany({
      where: { chapterId },
      select: { id: true },
    });

    if (!questions.length) {
      console.error("No questions found for chapterId:", chapterId);
      throw new Error("No questions found for the given chapterId.");
    }

    const questionIds = questions.map((q) => q.id);

    console.log("Fetching student quiz answers for studentId:", studentId);
    const studentQuizAnswers = await prisma.studentQuizAnswer.findMany({
      where: {
        studentQuiz: {
          studentId: studentId,
          questionId: { in: questionIds },
        },
      },
      select: {
        studentQuiz: { select: { questionId: true } },
        selectedOptionId: true,
      },
    });

    const studentResponse: { [questionId: string]: string[] } = {};
    for (const ans of studentQuizAnswers) {
      const qid = ans.studentQuiz.questionId;
      if (!studentResponse[qid]) studentResponse[qid] = [];
      studentResponse[qid].push(ans.selectedOptionId);
    }

    console.log("Fetching correct answers for questions:", questionIds);
    const questionAnswersRaw = await prisma.questionAnswer.findMany({
      where: { questionId: { in: questionIds } },
      select: { questionId: true, answerId: true },
    });

    const questionAnswers: { [questionId: string]: string[] } = {};
    for (const qa of questionAnswersRaw) {
      if (!questionAnswers[qa.questionId]) questionAnswers[qa.questionId] = [];
      questionAnswers[qa.questionId].push(qa.answerId);
    }

    const total = questionIds.length;
    let correct = 0;

    for (const questionId of questionIds) {
      const correctAnswers = questionAnswers[questionId]?.sort() || [];
      const userAnswers = studentResponse[questionId]?.sort() || [];
      const isCorrect =
        correctAnswers.length === userAnswers.length &&
        correctAnswers.every((v, i) => v === userAnswers[i]);
      if (isCorrect) correct++;
    }

    const result = {
      total,
      correct,
      score: total ? correct / total : 0,
    };

    console.log("Result calculated:", result);
    return { studentResponse, questionAnswers, result };
  } catch (error) {
    console.error("Error in correctAnswer:", error);
    throw new Error("Failed to calculate the correct answers.");
  }
}

