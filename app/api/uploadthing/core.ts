import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

const handleAuth = () =>{
    const userId="clg1v2j4f0000l5v8xq3z7h4d"; // Replace with actual userId from context
    if (!userId) throw new Error ("Unauthorized");
    return {userId};
}

export const ourFileRouter = {
courseImage: f({image: { maxFileSize: "4MB" ,maxFileCount:1}}).middleware(()=> handleAuth()).onUploadComplete(()=>{}),
courseAttachment: f(["text","image","video","audio","pdf"]).middleware(()=> handleAuth()).onUploadComplete(()=>{}),
chapterVideo: f({video: { maxFileSize: "512GB" ,maxFileCount:1}}).middleware(()=> handleAuth()).onUploadComplete(()=>{}),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
