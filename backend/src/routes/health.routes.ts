import { Router, type Request, type Response } from 'express';
import { checkDatabaseConnection } from '../config/db.js';

const router = Router();

router.get('/health', async (_req: Request, res: Response) => {
  try {
    await checkDatabaseConnection();
    return res.status(200).json({ status: 'ok', db: 'connected' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    return res.status(503).json({ status: 'degraded', db: 'unreachable', error: message });
  }
});

export default router;