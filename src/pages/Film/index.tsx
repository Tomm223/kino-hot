
import React, { FC, useEffect } from "react";
import { useSearchParams } from 'react-router-dom'
import FilmInfo from "../../components/filmPage/FilmInfo";
import FilmPoster from "../../components/filmPage/FilmPoster";
import { FilmBackground } from "../../components/styledComponents/filmPage";
import { LoadingDefault } from "../../components/UI/loaders/LoadingDefaul";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";
import FilmSimilar from "../../components/filmPage/FilmSimilar";
import FilmImgs from "../../components/filmPage/FilmImgs";

import styles from './index.module.scss'

const Film: FC = () => {

   const { FilmChange, FilmImgsChange, FilmsSimilarChange } = useAction()
   const { FilmUnMount, FilmImgsUnMount, FilmsSimilarUnMount } = useAction()
   const loading = useTypeSelector(state => state.film.loading)
   const film = useTypeSelector(state => state.film.film)
   const { FilmVideoChange, FilmVideoError } = useAction()
   const videos = useTypeSelector(state => state.filmVideo.items)
   // связка url и axios.get(Film)
   const [searchParams, setSearchParams] = useSearchParams()
   const id = searchParams.get('id')
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
         <div className={'film'}>
            <div className="container-filmPage">
               {loading ?

                  <LoadingDefault loading={loading} center={true} />

                  :
                  <div style={{ paddingTop: '1.5rem' }}>
                     <FilmPoster
                        film={film}
                        videos={videos}
                        init={FilmVideoChange}
                        error={FilmVideoError} />
                     <FilmImgs />
                     <FilmInfo film={film} />
                     <FilmSimilar />
                  </div>
               }
            </div>

         </div>
      </>
   )
}

export default Film