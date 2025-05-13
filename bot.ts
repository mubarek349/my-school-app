import { Bot } from "grammy";
// const bot = new Bot("7334590788:AAEBnVc_gQx9y9ZijOD_FdQNRbAQN5-Q6Vg"); // <-- put your bot token between the ""
const bot = new Bot("7894751055:AAFypK7odBkl9RdWDqYNb23SgasI9JU_NEA"); // <-- put your bot token between the ""

export async function startBot() {
  // Create an instance of the `Bot` class and pass your bot token to it.

  // You can now register listeners on your bot object `bot`.
  // grammY will call the listeners when users send messages to your bot.

  // Handle the /start command.
  bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
  // Handle other messages.
  bot.on("message", (ctx) => ctx.reply("Got another message!"));

  // Now that you specified how to handle messages, you can start your bot.
  // This will connect to the Telegram servers and wait for messages.

  // Start the bot.
  bot.start();
}

export default async function sendMessage(chat_id: number, message: string) {
  try {
    await bot.api.sendMessage(chat_id, message);
  } catch (err) {
    console.error("Failed to send initial message:", err);
  }
}

startBot();
