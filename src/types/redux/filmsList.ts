import { Film } from "../fetch"


export enum TypesFilmsList {
   FILMS_LOADING = "FILMS/LOADING",
   FILMS_CHANGED = "FILMS/CHANGED",
   PAGE_CHANGE = "PAGE/CHANGE",
   FILMS_ALERT_OPEN = "FILMS/ERROR/TRUE",
   FILMS_ALERT_CLOSE = "FILMS/ALERT/FALSE",
}

interface ActionFilmsListLoading {
   type: TypesFilmsList.FILMS_LOADING
}
interface ActionFilmsListPage {
   type: TypesFilmsList.PAGE_CHANGE,
   payload: number
}
interface ActionFilmsListChange {
   type: TypesFilmsList.FILMS_CHANGED,
   payload: PayloadFilmsListChange
}
interface ActionFilmsListErrOpen {
   type: TypesFilmsList.FILMS_ALERT_OPEN,
   payload: string
}
interface ActionFilmsListErrClose {
   type: TypesFilmsList.FILMS_ALERT_CLOSE
}
export type ActionTypesFilmsList = ActionFilmsListLoading | ActionFilmsListPage |
   ActionFilmsListChange | ActionFilmsListErrOpen | ActionFilmsListErrClose

interface PayloadFilmsListChange {
   films: Film[],
   pageCount: number
}