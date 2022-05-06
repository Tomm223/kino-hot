import { Film, FilmSimilar } from "../fetch"

export enum TypesFilmsSimilarReduc {
   FILMS_SIMILAR_LOADING = "FILMS_ALIKE/LOADING",
   FILMS_SIMILAR_CHANGE = "FILMS_ALIKE/CHANGE",
   FILMS_SIMILAR_ERROR_OPEN = "FILMS_ALIKE/ERROR/OPEN",
   FILMS_SIMILAR_ERROR_CLOSE = "FILMS_ALIKE/ERROR/CLOSE",
}


export type ActionFilmsSimilarReduc = FilmsChange | FilmsLoading | FilmsErrOpen | FilmsErrClose
export interface FilmsChange {
   type: TypesFilmsSimilarReduc.FILMS_SIMILAR_CHANGE,
   payload: {
      total: number,
      items: FilmSimilar[]
   }
}
export interface FilmSimilarDelete {
   type: TypesFilmsSimilarReduc.FILMS_SIMILAR_CHANGE,
   payload: {
      total: number
      items: never[]
   }
}
export interface FilmsLoading {
   type: TypesFilmsSimilarReduc.FILMS_SIMILAR_LOADING
}
export interface FilmsErrOpen {
   type: TypesFilmsSimilarReduc.FILMS_SIMILAR_ERROR_OPEN,
   payload: string
}
export interface FilmsErrClose {
   type: TypesFilmsSimilarReduc.FILMS_SIMILAR_ERROR_CLOSE
}