import React from "react";

async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ chat_id: string; lang: string }>;
}) {
  const {chat_id}=await params;
  const ch
  return <div>{children}</div>;
}

export default layout;
