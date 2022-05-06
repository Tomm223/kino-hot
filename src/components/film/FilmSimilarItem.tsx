import React, { FC } from "react";
import { useNavigateParams } from "../../hook/useNavigateParams";
import { FilmSimilar } from "../../types/fetch";
import { SimilarCard, SmiliarCardImgBlock } from "../styledComponents/filmSimilar";


interface FilmSimilarItemProps {
   film: FilmSimilar
}

const FilmSimilarItem: FC<FilmSimilarItemProps> = ({ film }) => {
   const navigateParams = useNavigateParams()
   function handle() {
      navigateParams('/film', { id: film.filmId })
   }
   return (
      <SimilarCard onClick={handle}>
         <SmiliarCardImgBlock>
            <div className="cardFilm__img-darken"></div>
            <img className="cardFilm__img-item" src={film.posterUrlPreview} alt="" />
         </SmiliarCardImgBlock>
         <div className="cardFilm__info">
            <h3 className="cardFilm__info-name">{film.nameRu}</h3>
         </div>
      </SimilarCard>
   )
}

export default FilmSimilarItem