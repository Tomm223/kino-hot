import { Dispatch } from "react";
import { GetFilmImgs } from "../../Fetch";
import { ActionFilmImgsReduc, ImgsDelete, PromiseImgsState, TypesFilmImgsReduc } from "../../types/redux/filmImgs";


export function FilmImgsChange(id: string) {
   return async (dispatch: Dispatch<ActionFilmImgsReduc>) => {
      try {
         dispatch({
            type: TypesFilmImgsReduc.IMGS_LOADING
         })
         const resp = await GetFilmImgs(id)
         setTimeout(() => {
            dispatch({
               type: TypesFilmImgsReduc.IMGS_CHANGE,
               payload: resp
            })
         }, 500)

      }
      catch {
         dispatch({
            type: TypesFilmImgsReduc.IMGS_ERROR_OPEN,
            payload: "При загрузке изображений произошла ошибка"
         })
         setTimeout(() => {
            dispatch({
               type: TypesFilmImgsReduc.IMGS_ERROR_CLOSE
            })
         }, 3000)
      }
   }
}

export function FilmImgsUnMount(): ImgsDelete {
   return {
      type: TypesFilmImgsReduc.IMGS_CHANGE,
      payload: {
         items: [],
         total: 0,
         totalPages: 0
      }
   }
}