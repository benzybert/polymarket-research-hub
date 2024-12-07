import express from 'express';
import { getMarketStats } from '../controllers/statistics';

const router = express.Router();

router.get('/market/:id', getMarketStats);

export { router as statisticsRouter };
