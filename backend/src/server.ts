// backend/src/server.ts
import http from "node:http";
import { Server } from "socket.io";
import { createApp } from "./app.js";

const port: number = Number(process.env.PORT) || 3000;
const corsOrigin: string = process.env.CORS_ORIGIN || "http://localhost:8080";

const app = createApp(corsOrigin);
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connecté :", socket.id);
});

httpServer.listen(port, () => {
  console.log(`Backend démarré sur le port ${port}`);
});