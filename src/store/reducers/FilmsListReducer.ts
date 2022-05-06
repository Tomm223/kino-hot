import React from "react";
import { Film } from "../../types/fetch";
import { ActionTypesFilmsList, TypesFilmsList } from "../../types/redux/filmsList";


export interface FilmsListState {
   films: Film[] | null,
   pageCount: number
   page: number,
   loading: boolean,
   alert: null | string
}


const initState: FilmsListState = {
   films: null,
   pageCount: 0,
   page: 1,
   loading: false,
   alert: null
}
export function FilmsListReducer(state = initState, action: ActionTypesFilmsList) {
   switch (action.type) {
      case TypesFilmsList.FILMS_LOADING:
         return { ...state, loading: true }
      case TypesFilmsList.FILMS_CHANGED:
         return { ...state, loading: false, films: action.payload.films, pageCount: action.payload.pageCount }
      case TypesFilmsList.PAGE_CHANGE:
         return { ...state, page: action.payload }
      case TypesFilmsList.FILMS_ALERT_OPEN:
         return { ...state, loading: false, alert: action.payload }
      case TypesFilmsList.FILMS_ALERT_CLOSE:
         return { ...state, alert: null }
      default:
         return { ...state }
   }
}