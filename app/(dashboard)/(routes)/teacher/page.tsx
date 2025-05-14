import React from "react";
import { redirect } from "next/navigation";

function Page() {
  redirect("/teacher/courses");
  return <div>Page</div>;
}

export default Page;
