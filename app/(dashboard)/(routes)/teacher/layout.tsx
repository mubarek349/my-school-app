// import { auth } from "../../../../auth";
// import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";
import React from "react";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    
    return redirect("/"); // Ensure no further rendering occurs
  }

  const userId = session.user.id;
  if(!isTeacher(userId))
    return redirect("/");
  

  return children;
}

export default layout;
