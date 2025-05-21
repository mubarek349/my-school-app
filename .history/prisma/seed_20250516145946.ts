import prisma from "@/lib/db";

(async () => {
  // Seed Admin
  await prisma.admin.create({
    data: {
      id: "clg1v2j4f0000l5v8xq3z7h4d",
      name: "admin",
      phoneno: "0911111111",
      passcode: "admin",
    },
  });

  // Seed coursepackage
  await prisma.coursePackage.create({
    data: {
      id:"1",
      userId: "clg1v2j4f0000l5v8xq3z7h4d",
      title: "Qaida Package",
      userType: "GENERAL",
    },
  });
  // Seed course
  await prisma.course.create({
    data: {
      title: "fiqh",
      description: "da",
      order:1,
    },
  });

  const course = await prisma.course.create({
    data: {
      title: "hadith",
      userType: "GENERAL",
    },
  }); const course = await prisma.course.create({
    data: {
      title: "fiqh",
      userType: "GENERAL",
    },
  }); const course = await prisma.course.create({
    data: {
      title: "fiqh",
      userType: "GENERAL",
    },
  });
  // Seed chapter
  const chapter = await prisma.chapter.create({
    data: {
      userId: "clg1v2j4f0000l5v8xq3z7h4d",
      title: "Qaida Package",
      userType: "GENERAL",
    },
  });

  // Seed Student
  await prisma.wpos_wpdatatable_23.create({
    data: {
      name: "student",
      passcode: "student123",
      phoneno: "0942303571",
      status: "active",
      chat_id: "973677019",
    },
  });

  // Seed Course
  const course = await prisma.course.create({
    data: {
      title: "Introduction to Programming",
      description: "Learn the basics of programming.",
      teacherId: teacher.id,
    },
  });

  // Seed Lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: "Lesson 1: What is Programming?",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      order: 1,
      courseId: course.id,
    },
  });

  // Seed Question
  const question = await prisma.question.create({
    data: {
      lessonId: lesson.id,
      question: "What is the output of 1 + 1?",
      questionOptions: {
        create: [
          { option: "1" },
          { option: "2" },
          { option: "3" },
          { option: "4" },
        ],
      },
    },
    include: { questionOptions: true },
  });

  // Seed QuestionAnswer (correct answer is "2")
  await prisma.questionAnswer.create({
    data: {
      questionId: question.id,
      answerId: question.questionOptions.find((opt) => opt.option === "2")!.id,
    },
  });
})()
  .then(() => {
    console.log("Seed Successfully 👌");
  })
  .catch((e) => {
    console.error(e);
    console.log("Failed to Seed 😞");
  });
