import React from "react";

async function layout({
  children,
  // params,
}: {
  children: React.ReactNode;
  params: Promise<{ chat_id: string; lang: string }>;
}) {
  
  return <div className="overflow-hidden">{children}</div>;
}

export default layout;
