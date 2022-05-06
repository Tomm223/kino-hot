import React from "react";

import { Film } from "../../types/fetch";
import { ActionFilmReduc, TypesFilmReduc } from "../../types/redux/filmItem";

export interface FilmInitState {
   film: null | Film,
   alert: null | string,
   loading: boolean
}


const initState: FilmInitState = {
   film: null,
   alert: null,
   loading: false
}


export function FilmReducer(state = initState, action: ActionFilmReduc) {
   switch (action.type) {
      // change state
      case TypesFilmReduc.FILM_CHANGE:
         return { ...state, loading: false, film: action.payload }
      case TypesFilmReduc.FILM_LOADING:
         return { ...state, loading: true }
      case TypesFilmReduc.FILM_ERROR_OPEN:
         return { ...state, alert: action.payload }
      case TypesFilmReduc.FILM_ERROR_CLOSE:
         return { ...state, alert: null }
      default:
         return { ...state }
   }
}