import prisma from "@/lib/db";

export async function showAnswer(chapterId: string) {
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

  console.log("Fetching correct answers for questions:", questionAnswers);
}
