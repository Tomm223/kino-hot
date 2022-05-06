import React, { FC, useEffect, useState } from "react";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";

const FilmPoster: FC = () => {
   const { FilmVideoChange } = useAction()
   const film = useTypeSelector(state => state.film.film)
   const videos = useTypeSelector(state => state.filmVideo.items)
   const [src, setSrc] = useState<string>('')
   useEffect(() => {
      FilmVideoChange(film?.kinopoiskId)
   }, [film])
   useEffect(() => {
      const youtuItem = videos.map((item) => {
         if (item.url.toLowerCase().includes('youtu')) {
            return item
         }
         else {
            // alert('Трейлер данного фильма не найден')
         }
      }
      )

      setSrc(youtuItem[0]?.url || '')
   }, [videos])


   return (
      <>
         <div className="film__img">
            <div className="film__img-block">
               <img className="film__img-item" src={film?.posterUrlPreview} alt="" />
               <a href={src} target='_blank' className="film__img-darken"></a>
            </div>
         </div>
         <div className="film__name">
            {film?.nameRu}
         </div>
      </>
   )
}

export default FilmPoster