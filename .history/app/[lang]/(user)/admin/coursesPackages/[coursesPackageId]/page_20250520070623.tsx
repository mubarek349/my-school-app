// import { auth } from "@/auth";
import { LayoutDashboard, ListChecks } from "lucide-react";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { TitleForm } from "../../../../../../components/custom/title-form";
import { DescriptionForm } from "../../../../../../components/custom/description-form";
import { auth } from "@/auth";
import { isTeacher } from "@/lib/teacher";
import { CoursesForm } from "@/components/custom/courses-form";

const CoursesPackageIdPage = async ({
  params,
}: {
  params: Promise<{ coursesPackageId: string }>;
}) => {
  const { coursesPackageId }=await params;
  // const {userId} = auth();
  const session = await auth();

  if (!session?.user) {
    return redirect("/"); // Ensure no further rendering occurs
  }

  const userId = session.user.id ? session.user.id : "";
  if (!isTeacher(userId)) return redirect("/");

  const coursesPackage = await prisma.coursePackage.findUnique({
    where: {
      id: coursesPackageId,
      userId,
    },
    include: {
      courses: { include: { chapters: { select: { isPublished: true } } } },
    },
  });

  if (!coursesPackage) {
    return redirect("/");
  }

  const requiredFields = [
    coursesPackage.title,
    coursesPackage.description,
    // coursesPackage.userType,
    coursesPackage.courses,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields}) `;

  return (
    <div className="p-6 overflow-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">CoursesPackage Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">coustomize your coursesPackage</h2>
          </div>
          <TitleForm
            initialData={coursesPackage}
            coursesPackageId={coursesPackage.id}
          />
          <DescriptionForm
            initialData={coursesPackage}
            coursesPackageId={coursesPackage.id}
          />
          {/* <UserTypeForm
            initialData={coursesPackage}
            coursesPackageId={coursesPackage.id}
          /> */}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={ListChecks} />
            <h2 className="text-xl">Package Courses</h2>
          </div>
          <CoursesForm
            initialData={coursesPackage}
            coursesPackageId={coursesPackage.id}
          />
        </div>
      </div>
    </div>
  );
};
export default CoursesPackageIdPage;
