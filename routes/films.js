import express from 'express';
import { listFilms } from '../controlers/films.js';
import { addFilm } from '../controlers/films.js';

const appRoute = express.Router();
appRoute.get('/film', listFilms);
appRoute.post('/film', addFilm);

export default appRoute;
