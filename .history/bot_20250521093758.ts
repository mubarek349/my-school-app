import { Bot } from "grammy";
import prisma from "./lib/db";
import { InlineKeyboard } from "grammy";

// Replace this with your public domain or use an environment variable
const BASE_URL =
  process.env.PUBLIC_URL || "https://ts8zrvv2-3000.euw.devtunnels.ms/";

const bot = new Bot("7894751055:AAFypK7odBkl9RdWDqYNb23SgasI9JU_NEA");

export async function startBot() {
  bot.command("start", async (ctx) => {
    const chatId = ctx.chat?.id;

    if (!chatId) {
      return ctx.reply("Unable to retrieve chat ID.");
    }

    const channel = await prisma.wpos_wpdatatable_23.findFirst({
      where: {
        chat_id: chatId.toString(),
        status: { in: ["active", "notyet"] },
      },
      select: {
        wdt_ID: true,
        activePackage: {
          select: {
            courses: {
              where: { order: 1 },
              select: {
                id: true,
                title: true,
                chapters: {
                  where: { position: 1 },
                  select: {
                    id: true,
                    title: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    const lang = "en";
    const stud = "stud";

    if (
      channel &&
      channel.activePackage &&
      channel.activePackage.courses.length > 0 &&
      channel.activePackage.courses[0].chapters.length > 0
    ) {
      // Check if student progress exists for the first chapter
      const course = channel.activePackage.courses[0];
      const chapter = course.chapters[0];

      const studentProgress = await prisma.studentProgress.findFirst({
        where: {
          studentId: channel.wdt_ID,
          chapterId: chapter.id,
        },
      });

      if (!studentProgress) {
        // Create the initial student progress entry
        await prisma.studentProgress.create({
          data: {
            studentId: channel.wdt_ID,
            chapterId: chapter.id,
            isCompleted: false,
          },
        });
      }

      const url = `${BASE_URL}/${lang}//${chatId}/${course.id}/${chapter.id}`;

      const keyboard = new InlineKeyboard().url("📚 Open Course Page", url);

      return ctx.reply(
        "✅ Welcome! Click the button below to access your courses:",
        {
          reply_markup: keyboard,
        }
      );
    } else {
      return ctx.reply(
        "🚫 You are not authorized to access the course platform."
      );
    }
  });

  bot.on("message", (ctx) => ctx.reply("Got another message!"));

  bot.catch((err) => {
    console.error("Error in middleware:", err);
  });

  bot.start();
}

export default async function sendMessage(chat_id: number, message: string) {
  try {
    await bot.api.sendMessage(chat_id, message);
  } catch (err) {
    console.error("Failed to send initial message:", err);
  }
}
