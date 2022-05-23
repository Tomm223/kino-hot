import React, { FC, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAction } from "../../../hook/useAction";
import { Search } from "../Search";
import { Logo } from "../Logo";

import style from './index.module.scss'
import { useNavigateParams } from "../../../hook/useNavigateParams";
import { URLQuery } from "../../../types/urlQuery";
import Auth from "../../Auth";
import { useStore } from "react-redux";
import { Person } from "../Persons";
import { useTypeSelector } from "../../../hook/useTypeSelector";
import { useMediaQuery } from "react-responsive";
import SearchAdaptive from "../../UI/headers/searchAdaptive";
const styles = style as any

const Header: FC = () => {

   const navigateHook = useNavigateParams()
   function HandleSearch(search: string) {
      if (search.length) {
         navigateHook('/', { search: search, page: 1 })
      }
   }

   function HandleLogo() {
      navigateHook('/', { collection: URLQuery.TOP100_FILMS, page: 1 })
   }

   const location = useLocation()
   const locationState = location.state as any
   useEffect(() => {
      if (locationState?.modal) {
         setModal(true)
      }
   }, [locationState?.modal])

   const [modal, setModal] = useState(false)
   const [login, setLogin] = useState(true)
   // 
   const user = useTypeSelector(state => state.user.user)
   const { ActionUserOut } = useAction()
   //responsive apadtive
   const maxTablet = useMediaQuery({ query: '(max-width: 768px)' })

   return (
      <header className={styles.header}>
         {
            maxTablet ?
               <div className={styles.header_block}>
                  <SearchAdaptive />
                  <Logo func={HandleLogo} />
                  <Person user={user} UserOut={ActionUserOut} setModal={setModal} setLogin={setLogin} />
               </div>
               :
               <div className={styles.header_block}>
                  <Logo func={HandleLogo} />
                  <div className={styles.search}>
                     <Search Change={HandleSearch} />
                  </div>
                  <Person user={user} UserOut={ActionUserOut} setModal={setModal} setLogin={setLogin} />
               </div>
         }
         <Auth user={user} store={{ state: modal, setState: setModal, login, setLogin }} />
      </header>
   )
}

export default Header