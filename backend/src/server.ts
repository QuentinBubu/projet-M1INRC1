import http from 'node:http';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

const port = Number(process.env.PORT) || 3000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:8080';

const app = express();
app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Client connecté:', socket.id);
});

httpServer.listen(port, () => {
  console.log(`Backend démarré sur le port ${port}`);
});