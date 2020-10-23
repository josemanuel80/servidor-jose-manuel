import express from 'express';
import appRoute from './routes/films.js';

const port = 3000;

const server = express();
//server.use(express.json);
server.use(appRoute);
server.listen(port, () => {
  console.log('listening');
});
