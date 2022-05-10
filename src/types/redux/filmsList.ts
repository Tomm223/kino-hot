import { FilmBase, FilmSearch } from "../fetch"


export enum TypesFilmsList {
   FILMS_LOADING = "FILMS/LOADING",
   FILMS_CHANGED = "FILMS/CHANGED",
   PAGE_CHANGE = "PAGE/CHANGE",
   KEYWORD_CHANGE = "KEYWORD/CHANGE",
   FILMS_ALERT_OPEN = "FILMS/ERROR/TRUE",
   FILMS_ALERT_CLOSE = "FILMS/ALERT/FALSE",
}

export interface ActionFilmsListLoading {
   type: TypesFilmsList.FILMS_LOADING
}
export interface ActionFilmsListPage {
   type: TypesFilmsList.PAGE_CHANGE,
   payload: number
}
export interface ActionFilmsListKeyword {
   type: TypesFilmsList.KEYWORD_CHANGE,
   payload: string
}
export interface ActionFilmsListChange {
   type: TypesFilmsList.FILMS_CHANGED,
   payload: PayloadFilmsListChange,
   meta?: {
      timeout: number
   }
}

export interface ActionFilmsListErrOpen {
   type: TypesFilmsList.FILMS_ALERT_OPEN,
   payload: string
}
export interface ActionFilmsListErrClose {
   type: TypesFilmsList.FILMS_ALERT_CLOSE
}
export type ActionTypesFilmsList = ActionFilmsListLoading | ActionFilmsListChange |
   ActionFilmsListErrOpen | ActionFilmsListErrClose |
   ActionFilmsListKeyword | ActionFilmsListPage

interface PayloadFilmsListCollectChange {
   films: FilmBase[] | FilmSearch[],
   pageCount: number,
   page: number
}
interface PayloadFilmsListChange {
   keyword: string,
   films: FilmBase[] | FilmSearch[],
   pageCount: number,
   page: number
}