
import React, { FC, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom'
import FilmInfo from "../../components/filmPage/FilmInfo";
import FilmPoster from "../../components/filmPage/FilmPoster";
import { FilmBackground } from "../../components/styledComponents/filmPage";
import { LoadingDefault } from "../../components/UI/loaders/LoadingDefaul";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";
import FilmSimilar from "../../components/filmPage/FilmSimilar";
import FilmImgs from "../../components/filmPage/FilmImgs";
import { AlertError } from "../../components/UI/Alert";

import style from './index.module.scss'
import Gallery from "../../components/Gallery";
const styles = style as any


const Film: FC = () => {

   const { FilmChange, FilmImgsChange, FilmsSimilarChange } = useAction()
   const { FilmUnMount, FilmImgsUnMount, FilmsSimilarUnMount } = useAction()
   const loading = useTypeSelector(state => state.film.loading)
   const alert = useTypeSelector(state => state.film.alert)
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
   // если err film то Go назад
   const navigate = useNavigate()
   useEffect(() => {
      if (alert && !film) {
         navigate(-1)
      }
   }, [alert])

   const imgs = useTypeSelector(state => state.filmImgs.imgs)
   const total = useTypeSelector(state => state.filmImgs.total)
   return (
      <>
         <FilmBackground />
         <div className={styles.film}>
            <div className="container-filmPage">
               <AlertError alert={alert} />
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
                     <Gallery imgs={imgs} total={total} stepId={4} />
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