import getFilms from '../models/films.js';
import addFilmResource from '../models/films.js';

export const listFilms = async (request, response) => {
  console.log('list');
  const filmsGot = await getFilms();
  const films = JSON.parse(filmsGot);
  //console.log(films);
  response.send(films);
};

export const addFilm = async (request, response) => {
  const { body } = request;

  const newFilm = await addFilmResource(body);
  console.log(newFilm);
  response.send(newFilm);
};

//export default listFilms;
