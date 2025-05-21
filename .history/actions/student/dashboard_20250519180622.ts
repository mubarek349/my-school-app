"use server";
import { prisma } from "@/lib/db";

export async function getpackage(chatId: string) {
  const myPackageList = await prisma.studentProgress.findMany({
    where: { student: { chat_id: chatId } },
    select: {
      chapter: {
        select: {
          course: {
            select: {
              _count: { select: { chapters: true } },
              package: {
                select: { name: true },
              },
            },
          },
        },
      },
    },
  });
  return myPackageList;
}

export async function getstudentId(chatid: string) {
  const studentId = await prisma.wpos_wpdatatable_23.findFirst({
    where: { chat_id: chatid },
    select: { wdt_ID: true },
  });
  return studentId?.wdt_ID;
}

export async function studentDashboard(chatId: string) {}
