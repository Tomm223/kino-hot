import React, { FC, useEffect } from "react";
import { useAction } from "../hook/useAction";
import { useTypeSelector } from "../hook/useTypeSelector";
//import { AlertError } from "../components/UI/alerts";
import { AlertError } from "../components/UI/Alert";
import FilmItem from "../components/films/FilmsItem";
import PaginationFilms from "../components/films/Pagination";
import { LoadingFetch } from "../components/UI/Loaders";

const FilmList: FC = () => {
   const films = useTypeSelector(state => state.films.films)
   const loading = useTypeSelector(state => state.films.loading)
   const alert = useTypeSelector(state => state.films.alert)

   return (
      <>
         <AlertError alert={alert} />
         <LoadingFetch loading={loading} />
         <div className="container">
            {!loading &&
               <div className="cardFilm-list">
                  {films &&
                     films.map((film) => {
                        return <FilmItem key={film.filmId} miniSize={false} film={film} />
                     })}
               </div>
            }

            <PaginationFilms />
         </div>

      </>


   )
}

export default FilmList