import React, { FC, useEffect } from "react";
import FilmItem from "../components/films/FilmsItem";
import FilmList from "./FilmsList";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom'
import { useTypeSelector } from "../hook/useTypeSelector";
import { useAction } from "../hook/useAction";
import { GetFilmImgs } from "../Fetchs";

const Layout: FC = () => {

   // fetch films list
   const page = useTypeSelector(state => state.films.page)
   const { FilmsListChange } = useAction()
   useEffect(() => {
      FilmsListChange(page)
   }, [page])

   return (
      <>
         <Header />
         <main className="main">
            <Outlet />
         </main>
      </>
   )
}

export default Layout