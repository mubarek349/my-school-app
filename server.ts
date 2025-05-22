import { createServer } from "http";
import express from "express";
import cors from "cors";
import next from "next";
import { startBot } from "./bot";
const app11 = express();

app11.set("trust proxy", 1);

process.loadEnvFile(".env");

const hostname = process.env.HOST || "localhost",
  port = parseInt(process.env.PORT || "3000", 10),
  dev = process.env.NODE_ENV !== "production",
  app = next({ dev, hostname, port, turbopack: false });

app.prepare().then(async () => {
  const expressApp = express();
  expressApp.use(express.json());
  expressApp.use(express.urlencoded({ extended: true }));
  expressApp.use(
    cors({
      origin: "*",
      methods: "GET,POST,PUT,DELETE",
      allowedHeaders: "Content-Type,Authorization",
    })
  );
  expressApp.use((req, res) => {
    // Robust usage of Next.js request handler for all routes
    return app.getRequestHandler()(req, res);
  });

  const httpServer = createServer(expressApp);
  await startBot();
  httpServer.listen(port, hostname, () => {
    console.log(
      `> Server listening at https://${hostname}:${port} as ${
        process.env.NODE_ENV ?? "development"
      }`
    );
  });
});
