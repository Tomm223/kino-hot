import { type } from "os";
import React, { Dispatch } from "react";
import { GetTop100Films, SearchFilms } from "../../Fetch";
import { ActionFilmsListKeyword, ActionFilmsListPage, ActionTypesFilmsList, TypesFilmsList } from "../../types/redux/filmsList";


export function FilmsListChange(pageNum: number, search: string = '') {
   return async (dispatch: Dispatch<ActionTypesFilmsList>) => {
      try {
         dispatch({
            type: TypesFilmsList.FILMS_LOADING
         })

         const resp = search.length ? await SearchFilms(search, pageNum) : await GetTop100Films(pageNum)
         dispatch({
            type: TypesFilmsList.FILMS_CHANGED,
            payload: {
               keyword: search,
               pageCount: resp.pagesCount,
               films: resp.films,
               page: pageNum
            },
            meta: {
               timeout: 500
            }
         })
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


export const FilmsListPageChange = (page: number): ActionFilmsListPage => {
   return {
      type: TypesFilmsList.PAGE_CHANGE,
      payload: page
   }
}


export const FilmsListKeyWordChange = (str: string): ActionFilmsListKeyword => {
   return {
      type: TypesFilmsList.KEYWORD_CHANGE,
      payload: str
   }
}

