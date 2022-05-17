import React, { FC, useEffect } from "react";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";
//import { AlertError } from "../components/UI/alerts";
import { AlertError } from "../../components/UI/Alert";
import FilmItem from "../../components/FilmItem";
import Pagination from "../../components/Pagination";
import { LoadingFilmList } from "../../components/UI/loaders/LoadingFilmList";

import style from './index.module.scss'
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LocalStorageTypes, URLQuery } from "../../types/urlQuery";
import { useNavigateParams } from "../../hook/useNavigateParams";
import { FilmBase, FilmSearch } from "../../types/fetch";
const styles = style as any

const FilmList: FC = () => {
   const films = useTypeSelector(state => state.films.films)
   const loading = useTypeSelector(state => state.films.loading)
   const alert = useTypeSelector(state => state.films.alert)

   //pagination
   const pageCount = useTypeSelector(state => state.films.pageCount)
   const page = useTypeSelector(state => state.films.page)
   const { FilmsListChange } = useAction()

   // listener for urlParams 
   const [searchParamHook, setSearchParamHook] = useSearchParams()
   const searchParams = searchParamHook.get('search')
   const collectionParams = searchParamHook.get('collection')
   const pageParams = searchParamHook.get('page')
   //Listener
   useEffect(() => {
      if (searchParams) {
         const num = pageParams ? JSON.parse(pageParams) : 1
         FilmsListChange(num, searchParams)
      }
      if (collectionParams === URLQuery.TOP100_FILMS) {
         const num = pageParams ? JSON.parse(pageParams) : 1
         FilmsListChange(num)
      }
      else if (!collectionParams && !searchParams) {
         // дефольтый запрос фильмов
         setSearchParamHook({ collection: `${URLQuery.TOP100_FILMS}`, page: `1` })
      }
   }, [searchParams, collectionParams, pageParams])

   //pagination func for change page in searchParams
   const navigationHook = useNavigateParams()
   function PaginationHandle(page: number | string) {
      if (searchParams?.length) {
         navigationHook('/', { search: searchParams, page: page })
      }
      else if (collectionParams?.length) {
         navigationHook('/', { collection: URLQuery.TOP100_FILMS, page: page })
      }


   }

   // array for placeholder-Loading film-list-items
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

   // to top  для просмотра страницы с самого начала
   useEffect(() => {
      if (loading) {
         document.documentElement.scrollTop = 0
      }
   }, [loading])

   const navigate = useNavigate()
   const location = useLocation()
   function HandleToFilm(film: FilmBase | FilmSearch) {
      navigate(`/film?id=${film.filmId}`, { state: location })
   }

   return (
      <>
         <AlertError alert={alert} />
         <div className={styles.container}>
            {!loading
               ?
               <div className={styles.list}>
                  {
                     films &&
                     films.map((film, i) => {
                        return <FilmItem onClick={HandleToFilm} key={film.filmId} film={film} />
                     })
                  }
               </div>
               :
               <div className={styles.list}>
                  {arr.map((item) => {
                     return <LoadingFilmList key={item + Math.random()} />


                  })
                  }
               </div>
            }
            <Pagination page={page} pageCount={pageCount} setSearchParams={PaginationHandle} />
         </div>
      </>


   )
}

export default FilmList