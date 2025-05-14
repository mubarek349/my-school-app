import { Bot } from "grammy";
import prisma from "@/lib/db";
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
    });

    if (channel) {
      const url = `${BASE_URL}/${chatId}/search`;

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
