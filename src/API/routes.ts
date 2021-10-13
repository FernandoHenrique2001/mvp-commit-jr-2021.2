import { response, Router } from "express";
import GenreService from "../domain/GenreService";
const router = Router();
import GenreController from "./api";

const genreList = new GenreController();

router.get("/genreList", (request, response) => {
    return  genreList.getGenreList(request, response);
});

router.get("/movieByGenre", (request, response) => {
    return  genreList.getMovieByGenreList(request, response);
});

router.get("/movieList", (request, response) => {
    return  genreList.getMovieList(request, response);
});

router.get("/", (request, response) => {
    return response.json({
        helloWord: "Hello Word",
        App: "NodeJs App"
    });
});

export default router;