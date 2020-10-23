import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const getFilms = async () => {
  const filmsList = await fs.readFile('./data/films.json');
  return filmsList;
};

export const addFilmResource = async (data) => {
  const filmsFile = await fs.readFile('./data/films.json');
  const { films } = JSON.parse(filmsFile);
  const film = { ...data, id: uuidv4() };

  films.push(film);
  await fs.writeFile('./data/films.json', JSON.stringify({ films }));
  return film;
};

export default getFilms;
