import express from 'express';
import appRoute from './routes/films.js';
import logger from './lib/logger.js';
import loggerMiddleware from './middleware/logger-middleware.js';
import bodyParser from 'body-parser';

const port = 3000;

const server = express();

server.use(bodyParser.json());
server.use(loggerMiddleware);
//server.use(express.json);
server.use(appRoute);

server.listen(port, () => logger.info(`Server running on port 📡 ${port}`));
