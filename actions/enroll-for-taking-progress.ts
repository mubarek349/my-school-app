import prisma from "@/lib/db";

export async function setStudentProgress(
  studentId: number,
  courseId: string
) {

const studentProgress=await prisma.studentProgress.count({
    where:{
        studentId:studentId,
        chapter:{
            courseId:courseId,
        },
        isCompleted:false,
    }
});

if(studentProgress>0){
    return "previously enrolled";
}
else{

}

}