import { startBot } from "./lib/bot";

(async () => {
  console.log("Starting the bot...");
  await startBot();
  console.log("Bot started.");
})();
