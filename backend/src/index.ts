import express from 'express';
import cors from 'cors';
import { marketsRouter } from './api/routes/markets';
import { statisticsRouter } from './api/routes/statistics';
import { errorHandler } from './middleware/error';
import { logger } from './utils/logger';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/markets', marketsRouter);
app.use('/api/statistics', statisticsRouter);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
