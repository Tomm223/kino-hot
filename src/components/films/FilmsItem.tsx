import React, { FC } from "react";
import { useLocation } from 'react-router-dom'
import { useNavigateParams } from "../../hook/useNavigateParams";
import { Film, FilmSimilar } from "../../types/fetch";
import FilmCard from "../styledComponents/filmCard";

interface FilmsItemProps {
   film: Film
   miniSize: boolean
}

const FilmItem: FC<FilmsItemProps> = ({ film, miniSize }) => {

   const navigateParams = useNavigateParams()


   function handle() {
      navigateParams('/film', { id: film.filmId })
   }

   return (
      <>
         <div className="cardFilm" onClick={handle}>
            <div className="cardFilm__img-block">
               <div className="cardFilm__img-darken"></div>
               <img className="cardFilm__img-item" src={film.posterUrlPreview} alt="" />
            </div>
            <div className="cardFilm__info">
               <h3 className="cardFilm__info-name">{film.nameRu}</h3>
               <div className="cardFilm__info-list">
                  {film.genres && film.genres.map((item, i) => {
                     return <p key={i} className="cardFilm__info-genres">{item.genre} </p>
                  })}
               </div>
               <div className="cardFilm__rating">
                  {film.rating}
               </div>
            </div>
         </div>
      </>
   )
}

export default FilmItem