
import { FilmBase, FilmFull } from "../fetch"


export enum TypesFilmReduc {
   FILM_LOADING = "FILM/LOADING",
   FILM_CHANGE = "FILM/CHANGE",
   FILM_ERROR_OPEN = "FILM/ERROR/OPEN",
   FILM_ERROR_CLOSE = "FILM/ERROR/CLOSE",
}

export type ActionFilmReduc = FilmChange | FilmDelete | FilmLoading | FilmErrOpen | FilmErrClose
export interface FilmChange {
   type: TypesFilmReduc.FILM_CHANGE,
   payload: FilmFull
}
export interface FilmDelete {
   type: TypesFilmReduc.FILM_CHANGE,
   payload: null
}
export interface FilmLoading {
   type: TypesFilmReduc.FILM_LOADING
}
export interface FilmErrOpen {
   type: TypesFilmReduc.FILM_ERROR_OPEN,
   payload: string
}
export interface FilmErrClose {
   type: TypesFilmReduc.FILM_ERROR_CLOSE
}