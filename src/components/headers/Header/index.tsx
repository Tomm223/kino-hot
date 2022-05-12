import React, { FC, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useAction } from "../../../hook/useAction";
import { Search } from "../Search";
import { Logo } from "../Logo";

import style from './index.module.scss'
import { useNavigateParams } from "../../../hook/useNavigateParams";
import { URLQuery } from "../../../types/urlQuery";
import Auth from "../../Auth";
import { useStore } from "react-redux";
const styles = style as any

const Header: FC = () => {

   const navigateHook = useNavigateParams()
   function HandleSearch(search: string) {
      if (search.length) {
         navigateHook('/', { search: search, page: 1 })
      }

   }


   const navigate = useNavigate()
   function HandleLogo() {
      navigate('/')
      navigateHook('/', { collection: URLQuery.TOP100_FILMS, page: 1 })
   }

   const [modal, setModal] = useState(false)
   const [login, setLogin] = useState(true)

   return (
      <header className={styles.header}>
         <div className={styles.header_block}>
            <Logo func={HandleLogo} />
            <div className={styles.search}>
               <Search Change={HandleSearch} />
            </div>
            <div onClick={() => setModal(true)} className={styles.person}>
               <div className={styles.person_btns}>
                  <div className={styles.person_btn}>
                     Вход
                  </div>
                  <div onClick={() => setLogin(false)} className={styles.person_btn}>
                     Регистрация
                  </div>
               </div>
               <div className={styles.person_img}></div>
            </div>
         </div>
         <Auth store={{ state: modal, setState: setModal, login, setLogin }} />
      </header>
   )
}

export default Header