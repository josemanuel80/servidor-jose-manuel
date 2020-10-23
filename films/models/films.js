import {promises as fs} from 'fs';

const getFilms=async()=>{
    const filmsList=await fs.readFile('./data/films.json');
    return filmsList;
}

export const addFilmResource= async (data)=>{
    const filmsFile=await fs.readFile('./data/films.json');
    const {films}=JSON.parse(filmsFile);
    console.log('resource');
    // const film={data};
    films.push(data);
    console.log('films');

    await fs.writeFile('./data/films.json', JSON.stringify({films,}),);
    console.log(filmsFile);
    return filmsFile;

}

export default getFilms;