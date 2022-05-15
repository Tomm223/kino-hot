import { Dispatch } from "react";
import { GetFilmVideo } from "../../Fetch";
import { ActionTypeFilmVideo, TypesFilmVideo } from "../../types/redux/filmVideo";




export function FilmVideoChange(id: number) {
   return async (dispatch: Dispatch<ActionTypeFilmVideo>) => {
      try {
         dispatch({
            type: TypesFilmVideo.FILM_VIDEO_LOADING
         })
         const resp = await GetFilmVideo(id)
         dispatch({
            type: TypesFilmVideo.FILM_VIDEO_CHANGE,
            payload: resp
         })
      }

      catch {
         //FilmVideoError('При загрузки видео материалов произошла ошибка')
         // ПОЧЕМУ НЕ РАБОТАЕТ
         dispatch({
            type: TypesFilmVideo.FILM_VIDEO_ERROR_OPEN,
            payload: 'При загрузки видео материалов произошла ошибка'
         })
         setTimeout(() => {
            dispatch({
               type: TypesFilmVideo.FILM_VIDEO_ERROR_CLOSE
            })
         }, 3000)
      }

   }

}
export const FilmVideoError = (str: string) => {
   return (dispatch: Dispatch<ActionTypeFilmVideo>) => {
      dispatch({
         type: TypesFilmVideo.FILM_VIDEO_ERROR_OPEN,
         payload: str
      })
      setTimeout(() => {
         dispatch({
            type: TypesFilmVideo.FILM_VIDEO_ERROR_CLOSE
         })
      }, 3000)
   }
}