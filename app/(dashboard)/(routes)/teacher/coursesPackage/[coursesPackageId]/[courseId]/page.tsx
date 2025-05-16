// import { auth } from "@/auth";
import { LayoutDashboard, ListChecks } from "lucide-react";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { TitleForm } from "../../../../../../components/custom/title-form";
import { DescriptionForm } from "../../../../../../components/custom/description-form";
import { ImageForm } from "../../../../../../components/custom/image-form";
import { ChaptersForm } from "../../../../../../components/custom/chapters-form";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  // const {userId} = auth();
  const userId = "clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context

  if (!userId) {
    return redirect("/");
  }

  const { courseId } = await params;

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
      userId,
    },
    include: {
      chapters: { include: { course: { select: { isPublished: true } } } },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    // course.price,
    // course.categoryId,
    course.chapters,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields}) `;

  return (
    <div className="p-6 overflow-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">coustomize your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={ListChecks} />
            <h2 className="text-xl">Course chapters</h2>
          </div>
          <ChaptersForm initialData={course} courseId={course.id} />
        </div>
      </div>
    </div>
  );
};
export default CourseIdPage;
