import { Dispatch } from "react";
import { GetFilmsSimilar } from "../../Fetchs";
import { ActionFilmsSimilarReduc, FilmSimilarDelete, TypesFilmsSimilarReduc } from "../../types/redux/filmsSimilar";

export function FilmsSimilarChange(id: number | string) {
   return async (dispatch: Dispatch<ActionFilmsSimilarReduc>) => {
      try {
         dispatch({
            type: TypesFilmsSimilarReduc.FILMS_SIMILAR_LOADING
         })

         const resp = await GetFilmsSimilar(id)
         setTimeout(() => {
            dispatch({
               type: TypesFilmsSimilarReduc.FILMS_SIMILAR_CHANGE,
               payload: {
                  total: resp.total,
                  items: resp.items
               }
            })
         }, 500)
      }
      catch {
         dispatch({
            type: TypesFilmsSimilarReduc.FILMS_SIMILAR_ERROR_OPEN,
            payload: 'При загрузки подборки фильмов произошла ошибка'
         })
      }
   }
}

export function FilmsSimilarUnMount(): FilmSimilarDelete {
   return {
      type: TypesFilmsSimilarReduc.FILMS_SIMILAR_CHANGE,
      payload: {
         total: 0,
         items: []
      }
   }
}