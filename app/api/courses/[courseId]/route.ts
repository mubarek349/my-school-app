import prisma from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    // const {userId} = auth();
  const  userId ="clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
  const {courseId} = await params;
  const values = await req.json();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
const course = await prisma.course.update({
    where: {
      id: courseId,
      userId
    },
    data: {
      ...values,
    },
  });

  return new Response(JSON.stringify(course), {
    status: 200,
    headers: { "Content-Type": "application/json" }, 
});
    
  } catch (error) {
    console.error("Error updating course:", error);
  }
}
