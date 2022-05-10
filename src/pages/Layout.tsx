import React, { FC, useEffect } from "react";
import FilmItem from "../components/FilmItem";
import FilmList from "./FilmList";
import Header from "../components/headers/Header";
import { Outlet } from 'react-router-dom'
import { useTypeSelector } from "../hook/useTypeSelector";
import { useAction } from "../hook/useAction";
import { GetFilmImgs } from "../Fetch";
import Auth from "../components/Auth";

const Layout: FC = () => {


   return (
      <>
         <Header />
         <main>
            <Auth />
            <Outlet />
         </main>
      </>
   )
}

export default Layout