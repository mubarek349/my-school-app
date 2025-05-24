import React from "react";

export default async function layout({
  children,
}: // params,
{
  children: React.ReactNode;
  params: Promise<{ chat_id: string; courseId: string; chapterId: string }>;
}) {
  // const chat_id
  // const student = await prisma.wpos_wpdatatable_23.findFirst({
  //   where: {
  //     chat_id: chat_id,
  //     status: { in: ["active", "notyet"] },
  //   },
  //   select: {
  //     wdt_ID: true,
  //     name: true,
  //   },
  // });
  return <div className="overflow-hidden grid">{children}</div>;
}
