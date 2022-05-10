import React, { FC } from "react";
import { useNavigateParams } from "../../hook/useNavigateParams";
import { FilmBase, FilmFull, FilmSearch, FilmSimilar } from "../../types/fetch";

import style from './index.module.scss'
const styles = style as any

interface FilmsItemProps {
   film: FilmBase | FilmSimilar | FilmSearch,
   sizeImg?: {
      width: string,
      height: string
   }
   sizeBlock?: {

   }
}

const FilmItem: FC<FilmsItemProps> = ({ film, sizeImg, sizeBlock }) => {

   const navigateParams = useNavigateParams()


   function handle() {
      navigateParams('/film', { id: film.filmId })
   }

   return (
      <>
         <div className={styles.card} onClick={handle}
            style={sizeBlock}
         >
            <div className={styles.card__img_block}
               style={sizeImg}
            >
               <div className={styles.card__img_darken}></div>
               <img className={styles.card__img_item} src={film.posterUrlPreview} alt="" />
            </div>
            <div className={styles.card__info}>
               <h3 className={styles.card__info_name}>{film.nameRu}</h3>
               <div className={styles.card__info_list}>
                  {
                     film?.genres?.map((item, i) => {
                        if (i > 2) {
                           return <div key={item.genre}></div>
                        }
                        return <p key={item.genre} className={styles.card__info_genres}>{item.genre} </p>
                     })
                  }
               </div>
               {
                  film.rating &&
                  <div className={styles.card__rating}>
                     {film.rating}
                  </div>
               }

            </div>
         </div>
      </>
   )
}

export default FilmItem