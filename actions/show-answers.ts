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

  const studentAnswersRaw = await prisma.studentQuizAnswer.findMany({
    where: {
      selectedOption: {
        questionId: { in: questionIds },
      },
    },
    select: {
      studentQuiz: { select: { questionId: true } },
      selectedOptionId: true,
    },
  });

  // Group student answers by questionId
  const studentResponse: { [questionId: string]: string[] } = {};
  for (const ans of studentAnswersRaw) {
    const qid = ans.studentQuiz.questionId;
    if (!studentResponse[qid]) studentResponse[qid] = [];
    studentResponse[qid].push(ans.selectedOptionId);
  }

  // Group correct answers by questionId
  const questionAnswers: { [questionId: string]: string[] } = {};
  for (const qa of questionAnswersRaw) {
    if (!questionAnswers[qa.questionId]) questionAnswers[qa.questionId] = [];
    questionAnswers[qa.questionId].push(qa.answerId);
  }

  // Combine questionAnswers and studentResponse per questionId
  const combinedAnswers = questionIds.map((id) => ({
    questionId: id,
    correctAnswers: questionAnswers[id] || [],
    studentAnswers: studentResponse[id] || [],
  }));

  console.log("Combined answers:", combinedAnswers);

  return combinedAnswers;
}


