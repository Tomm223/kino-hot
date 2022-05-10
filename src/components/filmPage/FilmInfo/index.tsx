import React, { FC } from "react";
import { FilmFull } from "../../../types/fetch";

import style from './index.module.scss'
const styles = style as any

interface FilmInfoProps {
   film: FilmFull | null
}

const FilmInfo: FC<FilmInfoProps> = ({ film }) => {


   return (
      <>
         <div className={styles.description}>
            <p className={styles.description_item}>{film?.description}</p>
         </div>
         <div className={styles.film__info}>
            <div className={styles.film__infoItem}>
               Жанры:  {film?.genres.map((item) => {
                  return <p key={item.genre} className={styles.film__info_P}>{item.genre}</p>
               })}
            </div>
            <div className={styles.film__infoItem}>
               Страны:  {film?.countries.map((item) => {
                  return <p key={item.country} className={styles.film__info_P}>{item.country}</p>
               })}
            </div>
            <div className={styles.film__infoItem}>Год: {film?.year}</div>
            <div className={styles.film__infoItem}>Рейтинг: {film?.ratingKinopoisk}</div>
         </div>
      </>
   )
}

export default FilmInfo