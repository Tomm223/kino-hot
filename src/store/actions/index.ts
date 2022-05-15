import React from "react";
import * as FilmsListAct from "./ActionsFilmsList"
import * as FilmAct from "./ActionsFilm"
import * as FilmImgsAct from "./ActionsFilmImgs"
import * as FilmsSimilarAct from "./ActionsFilmsSimilar"
import * as ImgsCarousel from "./ActionsImgsCarousel"
import * as SimilarCarousel from "./ActionsSimilarCarousel"
import * as FilmVideo from "./ActionsFilmVideo"
import * as User from "./ActionsUser"
import * as Gallery from './ActionsGallery'

export default {
   ...FilmsListAct,
   ...FilmAct,
   ...FilmImgsAct,
   ...FilmsSimilarAct,
   ...ImgsCarousel,
   ...SimilarCarousel,
   ...FilmVideo,
   ...User,
   ...Gallery,
}