import api from "../config/axios";
import api_key from "../config/env";

async function getGenresList(){
    try{
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status <300){
            const genreList = response.data;
            return {
                status: true,
                data: genreList,
            }
        }

        return {
            status: false,
            data: "Failed the request",
        }
    } catch(err){
        throw(err);
    }
}

async function getMoviesByGenreList(){
    try{
        const response = await api.get(`/3/discover/movie?api_key=8cd67aec0feb437818050104f00eab75&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`);
        if(response.status >= 200 && response.status <300){
            const movieByGenreList = response.data;

            return {
                status: true,
                data: movieByGenreList
            }
        }

        return {
            status: false,
            data: "Failed the request",
        }
    }catch(err){
        throw (err);
        
    }
}

async function getMoviesList(){
    try{
        const response = await api.get(`/3/discover/movie?api_key=8cd67aec0feb437818050104f00eab75&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`);
        if(response.status >= 200 && response.status <300){
            const movieList = response.data;

            return {
                status: true,
                data: movieList
            }
        }

        return {
            status: false,
            data: "Failed the request",
        }
    }catch(err){
        throw (err);
        
    }
}

export {getGenresList, getMoviesByGenreList, getMoviesList};