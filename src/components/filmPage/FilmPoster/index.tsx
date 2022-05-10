import React, { Dispatch, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../../hook/useAction";
import { useTypeSelector } from "../../../hook/useTypeSelector";
import { FilmFull, FilmVideoType } from "../../../types/fetch";
import { ActionTypeFilmVideo } from "../../../types/redux/filmVideo";

import style from './index.module.scss'

const styles = style as any

interface FilmPosterProps {
   film: FilmFull | null,
   videos: never[] | FilmVideoType[],
   init: (id: number) => (dispatch: Dispatch<ActionTypeFilmVideo>) => Promise<void>,
   error: (str: string) => (dispatch: Dispatch<ActionTypeFilmVideo>) => void
}

const FilmPoster: FC<FilmPosterProps> = ({ film, videos, init, error }) => {

   const [href, setHref] = useState<string>('#')

   useEffect(() => {
      film?.kinopoiskId
         ?
         init(film?.kinopoiskId)
         :
         error('Изображение постера не найдено')
   }, [film])


   useEffect(() => {
      const youtuItem = videos.find((item) => item.url.toLowerCase().includes('youtu'))
      setHref(youtuItem?.url || '')
   }, [videos])


   const toVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href) {
         e.preventDefault()
         alert('ВИдео не найдено')
      }
   }
   return (
      <>
         {
            // modal с "Вы действительно хотите перейти на youtube и посмотреть трейлер <a href={src} target='_blank' >"
         }
         <div className={styles.Img}>
            <div className={styles.Img_block}>
               <img className={styles.Img_item} src={film?.posterUrlPreview} alt="" />
               <a
                  onClick={toVideo}
                  href={href}
                  target={href ? '_blank' : '_parent'}
                  className={styles.Img_darken}>

               </a>
            </div>
         </div>
         <div className={styles.Name}>
            {film?.nameRu}
         </div>
      </>
   )
}

export default FilmPoster