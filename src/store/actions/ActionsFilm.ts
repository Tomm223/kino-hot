import React, { Dispatch } from "react";
import { GetFilmId } from "../../Fetch";
import { ActionFilmReduc, FilmDelete, TypesFilmReduc } from "../../types/redux/filmItem";



export function FilmChange(id: string) {
   return async (dispatch: Dispatch<ActionFilmReduc>) => {
      dispatch({
         type: TypesFilmReduc.FILM_LOADING
      })
      try {
         const resp = await GetFilmId(id)
         setTimeout(() => {
            dispatch({
               type: TypesFilmReduc.FILM_CHANGE,
               payload: resp
            })
         }, 500);
      }
      catch {
         console.log("TUUU");

         dispatch({
            type: TypesFilmReduc.FILM_ERROR_OPEN,
            payload: "в загрузка данных о фильме произошла ошибка"
         })
         setTimeout(() => {
            dispatch({
               type: TypesFilmReduc.FILM_ERROR_CLOSE
            })
         }, 3000)
      }
   }
}

export const FilmUnMount = (): FilmDelete => {
   return {
      type: TypesFilmReduc.FILM_CHANGE,
      payload: null
   }
}