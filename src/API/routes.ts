import { Router } from "express";
const router = Router();
import GenreController from "./api";

const genreList = new GenreController();

router.get("/genreList", genreList.getGenreList);

router.get("/movieByGenre", genreList.getMovieByGenreList);

router.get("/movieList", genreList.getMovieList);

router.get("/", (request, response) => {
    return response.json({
        helloWord: "Hello Word",
        App: "NodeJs App"
    });
});

export default router;