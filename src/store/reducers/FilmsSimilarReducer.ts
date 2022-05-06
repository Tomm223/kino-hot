import React from "react";
import { Film, FilmSimilar } from "../../types/fetch";
import { ActionFilmsSimilarReduc, TypesFilmsSimilarReduc } from "../../types/redux/filmsSimilar";

interface FilmsAlikeInitState {
   total: number
   films: never[] | FilmSimilar[],
   loading: boolean,
   alert: null | string
}

const initState: FilmsAlikeInitState = {
   total: 0,
   films: [],
   loading: false,
   alert: null
}


export function FilmSimilarReducer(state = initState, action: ActionFilmsSimilarReduc) {
   switch (action.type) {
      // change state
      case TypesFilmsSimilarReduc.FILMS_SIMILAR_CHANGE:
         return { ...state, loading: false, films: action.payload.items, total: action.payload.total }
      case TypesFilmsSimilarReduc.FILMS_SIMILAR_LOADING:
         return { ...state, loading: true }
      case TypesFilmsSimilarReduc.FILMS_SIMILAR_ERROR_OPEN:
         return { ...state, alert: action.payload }
      case TypesFilmsSimilarReduc.FILMS_SIMILAR_ERROR_CLOSE:
         return { ...state, alert: null }
      default:
         return { ...state }
   }
}