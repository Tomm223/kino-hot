
import React, { FC, useEffect } from "react";
import { useSearchParams } from 'react-router-dom'
import FilmImgs from "../components/film/FilmImgs";
import FilmInfo from "../components/film/FilmInfo";
import FilmPoster from "../components/film/FilmPoster";
import FilmsSimilar from "../components/film/FilmsSimilar";
import { FilmBackground } from "../components/styledComponents/filmPage";
import { LoadingFetch } from "../components/UI/Loaders";
import { useAction } from "../hook/useAction";
import { useTypeSelector } from "../hook/useTypeSelector";

const Film: FC = () => {

   const [searchParams, setSearchParams] = useSearchParams()
   const id = searchParams.get('id')
   const { FilmChange, FilmImgsChange, FilmsSimilarChange } = useAction()
   const { FilmUnMount, FilmImgsUnMount, FilmsSimilarUnMount } = useAction()
   const loading = useTypeSelector(state => state.film.loading)
   const film = useTypeSelector(state => state.film.film)
   useEffect(() => {
      if (id) {
         FilmChange(id)
         FilmImgsChange(id)
         FilmsSimilarChange(id)
      }
      return () => {

         FilmUnMount()
         FilmImgsUnMount()
         FilmsSimilarUnMount()
      }
   }, [id])


   return (
      <>
         <FilmBackground />
         <div className="film">
            <div className="container-filmPage">
               {loading ?
                  <LoadingFetch loading={loading} />
                  :
                  <>
                     <FilmPoster />
                     <FilmImgs />
                     <FilmInfo />
                     <FilmsSimilar />
                  </>
               }
            </div>

         </div>
      </>
   )
}

export default Film