import { type } from "os";
import React, { Dispatch } from "react";
import { GetTop100Films } from "../../Fetchs";
import { ActionTypesFilmsList, TypesFilmsList } from "../../types/redux/filmsList";


export function FilmsListChange(pagaNum: number) {
   return async (dispatch: Dispatch<ActionTypesFilmsList>) => {
      try {
         dispatch({
            type: TypesFilmsList.FILMS_LOADING
         })
         const resp = await GetTop100Films(pagaNum)
         setTimeout(() => {
            dispatch({
               type: TypesFilmsList.FILMS_CHANGED,
               payload: {
                  films: resp.films,
                  pageCount: resp.pagesCount
               }
            })
         }, 1500)
      }
      catch {
         dispatch({
            type: TypesFilmsList.FILMS_ALERT_OPEN,
            payload: "Загрузка фильмов прервалась из-за неполадки"
         })
         setTimeout(() => {
            dispatch({
               type: TypesFilmsList.FILMS_ALERT_CLOSE
            })
         }, 3000)
      }

   }
}

export const FilmsListPageChange = (page: number): ActionTypesFilmsList => {
   return {
      type: TypesFilmsList.PAGE_CHANGE,
      payload: page
   }
}
