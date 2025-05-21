import React from "react";

function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ chat_id: string; lang: string }>;
}) {
  return <div>{children}</div>;
}

export default layout;
