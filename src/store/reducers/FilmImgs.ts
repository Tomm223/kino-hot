import React from "react";
import { FilmImg } from "../../types/fetch";
import { ActionFilmImgsReduc, TypesFilmImgsReduc } from "../../types/redux/filmImgs";


export interface FilmImgsInitState {
   imgs: FilmImg[],
   total: number,
   totalPages: number,
   alert: null | string,
   loading: boolean
}


const initState: FilmImgsInitState = {
   imgs: [],
   total: 0,
   totalPages: 0,
   alert: null,
   loading: false
}


export function FilmImgsReducer(state = initState, action: ActionFilmImgsReduc) {
   switch (action.type) {
      // change state
      case TypesFilmImgsReduc.IMGS_CHANGE:
         return {
            ...state, loading: false, imgs: action.payload.items,
            total: action.payload.total, totalPages: action.payload.totalPages
         }
      case TypesFilmImgsReduc.IMGS_LOADING:
         return { ...state, loading: true }
      case TypesFilmImgsReduc.IMGS_ERROR_OPEN:
         return { ...state, loading: false, alert: action.payload }
      case TypesFilmImgsReduc.IMGS_ERROR_CLOSE:
         return { ...state, alert: null }
      default:
         return { ...state }
   }
}