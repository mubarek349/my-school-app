import { auth } from "@/auth";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

const handleAuth = async() =>{
    const session = await auth();
    
      if (!session?.user) {
        
        return redirect("/"); // Ensure no further rendering occurs
      }
    
      const userId = session.user.id;
      if(!isTeacher(userId))
        return redirect("/");
       
    // if (!userId) throw new Error ("Unauthorized");
    return {userId};
}

export const ourFileRouter = {
courseImage: f({image: { maxFileSize: "4MB" ,maxFileCount:1}}).middleware(()=> handleAuth()).onUploadComplete(()=>{}),
courseAttachment: f(["text","image","video","audio","pdf"]).middleware(()=> handleAuth()).onUploadComplete(()=>{}),
chapterVideo: f({video: { maxFileSize: "512GB" ,maxFileCount:1}}).middleware(()=> handleAuth()).onUploadComplete(()=>{}),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
