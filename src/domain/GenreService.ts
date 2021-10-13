import api from "../config/axios";
import {getGenresList, getMoviesByGenreList, getMoviesList} from "../repository/repository";

class GenreService{

    async getGenreList(){
        const repositoryResponse = await getGenresList();

        if(repositoryResponse.status){
            return repositoryResponse;
        }
    }

    async getMovieByGenreList(){
        const repositoryResponse = await getMoviesByGenreList();

        if(repositoryResponse.status){
            // Converti a api que recebo para String
            const repositoryResponseString = JSON.stringify(repositoryResponse);
            // Converti a String para Objeto
            const repositoryResponseObj = JSON.parse(repositoryResponseString);
           // const esse = repositoryResponseObj.data.results.map(this.selectionFilms, 16);
            repositoryResponseObj.data = repositoryResponseObj.data.results.filter(this.selectionFilms, 16);
           // console.log(repositoryResponseObj.data.results[0]);
            return repositoryResponseObj;
        }
    }

    async getMovieList(){
        const repositoryResponse = await getMoviesList();

        if(repositoryResponse.status){
            return repositoryResponse;
        }
    }

    selectionFilms(film: any){

        return film.genre_ids.includes(this);
    }
}


export default GenreService;