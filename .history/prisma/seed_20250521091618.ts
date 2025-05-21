import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  // Seed Admin
  await prisma.admin.create({
    data: {
      id: "admin_001",
      name: "System Admin",
      phoneno: "0911223344",
      passcode: "admin123",
    },
  });

  // Seed Students
  await prisma.wpos_wpdatatable_23.createMany({
    data: [
      {
        wdt_ID: 1001,
        name: "John Doe (Completed Package 1)",
        passcode: "student1",
        phoneno: "0910203040",
        status: "active",
        chat_id: "chat_001",
      },
      {
        wdt_ID: 1002,
        name: "Jane Smith (In Progress)",
        passcode: "student2",
        phoneno: "0910203041",
        status: "active",
        chat_id: "chat_002",
      },
      {
        wdt_ID: 1003,
        name: "Bob Johnson (New Student)",
        passcode: "student3",
        phoneno: "0910203042",
        status: "active",
        chat_id: "chat_003",
      },
    ],
  });

  // Seed Packages
  await prisma.coursePackage.createMany({
    data: [
      {
        id: "pkg_001",
        name: "Programming Fundamentals",
        userType: "GENERAL",
      },
      {
        id: "pkg_002",
        name: "Web Development",
        userType: "GENERAL",
      },
      {
        id: "pkg_003",
        name: "Data Science",
        userType: "ADULT",
      },
    ],
  });

  // Assign packages to students
  await prisma.wpos_wpdatatable_23.update({
    where: { wdt_ID: 1001 },
    data: {
      packages: {
        connect: [{ id: "pkg_001" }, { id: "pkg_002" }],
      },
      activePackage: {
        connect: { id: "pkg_001" },
      },
    },
  });

  await prisma.wpos_wpdatatable_23.update({
    where: { wdt_ID: 1002 },
    data: {
      packages: {
        connect: [{ id: "pkg_001" }],
      },
      activePackage: {
        connect: { id: "pkg_001" },
      },
    },
  });

  // Seed Courses for Programming Package
  await prisma.course.createMany({
    data: [
      {
        id: "course_001",
        userId: "admin_001",
        title: "Programming Basics",
        description: "Introduction to programming concepts",
        isPublished: true,
        order: 1,
        packageId: "pkg_001",
        imageUrl: "https://example.com/prog-basics.jpg",
      },
      {
        id: "course_002",
        userId: "admin_001",
        title: "Object-Oriented Programming",
        description: "Learn OOP principles",
        isPublished: true,
        order: 2,
        packageId: "pkg_001",
        imageUrl: "https://example.com/oop.jpg",
      },
    ],
  });

  // Seed Courses for Web Dev Package
  await prisma.course.createMany({
    data: [
      {
        id: "course_101",
        userId: "admin_001",
        title: "HTML & CSS Fundamentals",
        description: "Build beautiful web pages",
        isPublished: true,
        order: 1,
        packageId: "pkg_002",
        imageUrl: "https://example.com/html-css.jpg",
      },
      {
        id: "course_102",
        userId: "admin_001",
        title: "JavaScript Mastery",
        description: "Complete JS from basics to advanced",
        isPublished: true,
        order: 2,
        packageId: "pkg_002",
        imageUrl: "https://example.com/js-mastery.jpg",
      },
    ],
  });

  // Seed Chapters for Programming Basics Course
  await prisma.chapter.createMany({
    data: [
      {
        id: "chapter_001",
        title: "Variables and Data Types",
        description: "Learn about variables and basic data types",
        position: 1,
        isPublished: true,
        courseId: "course_001",
        videoUrl: "https://example.com/videos/variables.mp4",
      },
      {
        id: "chapter_002",
        title: "Control Structures",
        description: "If statements and loops",
        position: 2,
        isPublished: true,
        courseId: "course_001",
        videoUrl: "https://example.com/videos/control-structures.mp4",
      },
      {
        id: "chapter_003",
        title: "Functions",
        description: "Creating and using functions",
        position: 3,
        isPublished: true,
        courseId: "course_001",
        videoUrl: "https://example.com/videos/functions.mp4",
      },
    ],
  });

  // Seed Chapters for OOP Course
  await prisma.chapter.createMany({
    data: [
      {
        id: "chapter_011",
        title: "Classes and Objects",
        description: "Introduction to OOP concepts",
        position: 1,
        isPublished: true,
        courseId: "course_002",
        videoUrl: "https://example.com/videos/classes-objects.mp4",
      },
      {
        id: "chapter_012",
        title: "Inheritance",
        description: "Understanding class inheritance",
        position: 2,
        isPublished: true,
        courseId: "course_002",
        videoUrl: "https://example.com/videos/inheritance.mp4",
      },
    ],
  });

  // --- SEED 5 QUESTIONS WITH OPTIONS FOR EACH CHAPTER ---

  const chapters = [
    "chapter_001",
    "chapter_002",
    "chapter_003",
    "chapter_011",
    "chapter_012",
  ];

  for (const chapterId of chapters) {
    for (let i = 1; i <= 5; i++) {
      const question = await prisma.question.create({
        data: {
          chapterId,
          question: `Sample Question ${i} for ${chapterId}`,
          questionOptions: {
            create: [
              { option: `Option 1 for Q${i}` },
              { option: `Option 2 for Q${i}` },
              { option: `Option 3 for Q${i}` },
              { option: `Option 4 for Q${i}` },
            ],
          },
        },
        include: { questionOptions: true },
      });

      // Optionally, set the first option as the correct answer
      await prisma.questionAnswer.create({
        data: {
          questionId: question.id,
          answerId: question.questionOptions[0].id,
        },
      });
    }
  }

  // Seed Student Progress for Completed Student
  await prisma.studentProgress.createMany({
    data: [
      // Student 1 completed all chapters in Course 1
      {
        studentId: 1001,
        chapterId: "chapter_001",
        isCompleted: true,
        completedAt: new Date("2023-02-01"),
      },
      {
        studentId: 1001,
        chapterId: "chapter_002",
        isCompleted: true,
        completedAt: new Date("2023-02-15"),
      },
      {
        studentId: 1001,
        chapterId: "chapter_003",
        isCompleted: true,
        completedAt: new Date("2023-02-28"),
      },
      // Student 1 completed all chapters in Course 2
      {
        studentId: 1001,
        chapterId: "chapter_011",
        isCompleted: true,
        completedAt: new Date("2023-03-10"),
      },
      {
        studentId: 1001,
        chapterId: "chapter_012",
        isCompleted: true,
        completedAt: new Date("2023-03-15"),
      },
    ],
  });

  // Seed Student Progress for In-Progress Student
  await prisma.studentProgress.createMany({
    data: [
      // Student 2 completed first chapter
      {
        studentId: 1002,
        chapterId: "chapter_001",
        isCompleted: true,
        completedAt: new Date("2023-03-05"),
      },
      // Student 2 started second chapter but didn't complete
      {
        studentId: 1002,
        chapterId: "chapter_002",
        isCompleted: false,
      },
    ],
  });

  console.log("🌱 Database seeded successfully with:");
  console.log("- 1 Admin user");
  console.log("- 3 Students with different progress levels");
  console.log("- 3 Packages (2 published, 1 unpublished)");
  console.log("- 4 Courses (2 in each published package)");
  console.log("- 5 Chapters with video content");
  console.log("- 5 Questions (with 4 options each) for every chapter");
  console.log("- Complete package history for testing");
  console.log("- Realistic student progress data");
  process.exit(0);
})().catch((e) => {
  console.error("❌ Seeding failed:", e);
  process.exit(1);
});
