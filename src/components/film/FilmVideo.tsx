
import React, { FC, useEffect } from "react";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";

interface FilmVideoProps {

}

const FilmVideo: FC<FilmVideoProps> = () => {
   const { FilmVideoChange } = useAction()
   const film = useTypeSelector(state => state.film.film)
   const videos = useTypeSelector(state => state.filmVideo.items)
   useEffect(() => {
      FilmVideoChange(film?.kinopoiskId)
   }, [film])
   //{videoSRC && <video src={videoSRC}></video>}
   //1. поиск до первого url www.youtu и его мы помещаем как ссылку на видос при нажатии на FilmPoster
   const srcYT = "https://www.youtube.com/embed/mqqft2x_Aa4"
   const srcMy = "https://www.youtube.com/watch?v=mqqft2x_Aa4"
   return (
      <>
         {
            videos.length &&
            <iframe width="560" height="315" src={'https://youtu.be/u34gHaRiBIU'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         }
      </>

   )
}

export default FilmVideo