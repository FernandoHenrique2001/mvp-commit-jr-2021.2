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
           return repositoryResponse;
        }
    }

    async getMovieList(){
        const repositoryResponse = await getMoviesList();

        if(repositoryResponse.status){
           return repositoryResponse;
        }
    }
}


export default GenreService;