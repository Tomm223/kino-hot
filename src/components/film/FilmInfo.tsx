import React, { FC } from "react";
import { useTypeSelector } from "../../hook/useTypeSelector";

const FilmInfo: FC = () => {
   const film = useTypeSelector(state => state.film.film)
   return (
      <>
         <div className="film__description">
            <p className="film__description-item">{film?.description}</p>
         </div>
         <div className="film__info">
            <div className="film__info-item">
               Жанры:  {film?.genres.map((item) => {
                  return <p key={item.genre} className="film__info-p">{item.genre}</p>
               })}
            </div>
            <div className="film__info-item">
               Страны:  {film?.countries.map((item) => {
                  return <p key={item.country} className="film__info-p">{item.country}</p>
               })}
            </div>
            <div className="film__info-item">Год: {film?.year}</div>
            <div className="film__info-item">Рейтинг: {film?.rating}</div>


         </div>
      </>
   )
}

export default FilmInfo