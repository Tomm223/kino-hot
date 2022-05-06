import React from "react";
import { FilmVideoType } from "../../types/fetch";
import { ActionTypeFilmVideo, TypesFilmVideo } from "../../types/redux/filmVideo";

interface FilmVideoState {
   total: number,
   items: FilmVideoType[] | never[],
   loading: boolean,
   error: null | string
}

const initState: FilmVideoState = {
   total: 0,
   items: [],
   loading: false,
   error: null
}



export function FilmVideoReducer(state = initState, action: ActionTypeFilmVideo) {
   switch (action.type) {
      case TypesFilmVideo.FILM_VIDEO_LOADING:
         return { ...state, loading: true }
      case TypesFilmVideo.FILM_VIDEO_CHANGE:
         return { ...state, loading: false, items: action.payload.items, total: action.payload.total }
      case TypesFilmVideo.FILM_VIDEO_ERROR_OPEN:
         return { ...state, loading: false, error: action.payload }
      case TypesFilmVideo.FILM_VIDEO_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }


}