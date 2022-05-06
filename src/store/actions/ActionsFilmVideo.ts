import { Dispatch } from "react";
import { GetFilmVideo } from "../../Fetchs";
import { ActionTypeFilmVideo, TypesFilmVideo } from "../../types/redux/filmVideo";




export function FilmVideoChange(id: number | undefined) {
   return async (dispatch: Dispatch<ActionTypeFilmVideo>) => {
      try {
         dispatch({
            type: TypesFilmVideo.FILM_VIDEO_LOADING
         })
         if (id !== undefined) {
            const resp = await GetFilmVideo(id) //id === undefined ? 0 : id
            dispatch({
               type: TypesFilmVideo.FILM_VIDEO_CHANGE,
               payload: resp
            })
         }
         else {
            // ПОЧЕМУ НЕ РАБОТАЕТ
            //FilmVideoError('Фильм не найден')
            dispatch({
               type: TypesFilmVideo.FILM_VIDEO_ERROR_OPEN,
               payload: 'Фильм не найден'
            })
            setTimeout(() => {
               dispatch({
                  type: TypesFilmVideo.FILM_VIDEO_ERROR_CLOSE
               })
            }, 3000)

         }


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
      console.log("TREU");
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