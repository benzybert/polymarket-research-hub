import express from 'express';
import { getMarkets, getMarketById } from '../controllers/markets';

const router = express.Router();

router.get('/', getMarkets);
router.get('/:id', getMarketById);

export { router as marketsRouter };
