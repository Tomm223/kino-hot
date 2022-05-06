import { FilmVideoType, PromiseFilmVideo } from "../fetch"

export enum TypesFilmVideo {
   FILM_VIDEO_LOADING = "FILM/VIDEO/LOADING",
   FILM_VIDEO_CHANGE = "FILM/VIDEO/CHANGE",
   FILM_VIDEO_ERROR_OPEN = "FILM/VIDEO/ERROR/OPEN",
   FILM_VIDEO_ERROR_CLOSE = "FILM/VIDEO/ERROR/CLOSE",
}

export interface FilmVideoLoading {
   type: TypesFilmVideo.FILM_VIDEO_LOADING
}
export interface FilmVideoChange {
   type: TypesFilmVideo.FILM_VIDEO_CHANGE,
   payload: PromiseFilmVideo
}
export interface FilmVideoErrOpen {
   type: TypesFilmVideo.FILM_VIDEO_ERROR_OPEN,
   payload: string
}
export interface FilmVideoErrClose {
   type: TypesFilmVideo.FILM_VIDEO_ERROR_CLOSE
}

export type ActionTypeFilmVideo = FilmVideoLoading | FilmVideoChange | FilmVideoErrOpen | FilmVideoErrClose