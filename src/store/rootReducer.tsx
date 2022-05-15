import React from "react"
import { combineReducers } from 'redux'
import { FilmImgsReducer } from "./reducers/FilmImgs"
import { FilmReducer } from "./reducers/FilmReducer"
import { FilmsListReducer } from "./reducers/FilmsListReducer"
import { FilmSimilarReducer } from "./reducers/FilmsSimilarReducer"
import { FilmVideoReducer } from "./reducers/FilmVideo"
import { GalleryCarousel } from "./reducers/GalleryCarousel"
import { ImgsCarousel } from "./reducers/ImgsCaroules"
import { SimilarCarouselReducer } from "./reducers/SimilarCarouselReducer"
import { userReducer } from "./reducers/UserReducer"


export const rootReducer = combineReducers({
   films: FilmsListReducer,
   film: FilmReducer,
   filmImgs: FilmImgsReducer,
   filmsSimilar: FilmSimilarReducer,
   imgsCarousel: ImgsCarousel,
   similarCarousel: SimilarCarouselReducer,
   filmVideo: FilmVideoReducer,
   gallery: GalleryCarousel,
   user: userReducer,
})

export default rootReducer
export type RootType = ReturnType<typeof rootReducer>
