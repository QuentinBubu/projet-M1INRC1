// backend/src/app.ts
import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

export function createApp(corsOrigin: string = "http://localhost:8080"): Express {
  const app = express();
  app.use(cors({ origin: corsOrigin }));
  app.use(express.json());

  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
};