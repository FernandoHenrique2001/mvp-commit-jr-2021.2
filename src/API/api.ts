import { Request, Response } from "express";
import GenreService from "../domain/GenreService";



class GenreController {

    async getGenreList(request: Request, response: Response){
        try{
            const genreData = new GenreService();
            const genreList = await genreData.getGenreList();
            
            if(genreList != null){
                return response.send(genreList);
            }

            return response.send({ err: "Err"})
        }catch(err){
            throw (err);
            
        }
    }

    async getMovieByGenreList(request: Request, response: Response){
        try{
            const movieData = new GenreService();
            const movieList = await movieData.getMovieByGenreList();

            if(movieList != null){
                return response.send(movieList);
            }

            return response.send({err: "Err"});
        }catch(err){
            throw (err);
        }
    }

    async getMovieList(request: Request, response: Response){
        try{
            const movieData = new GenreService();
            const movieList = await movieData.getMovieList();

            if(movieList != null){
                return response.send(movieList);
            }

            return response.send({err: "Err"});
        }catch(err){
            throw (err);
        }
    }

}

export default GenreController;