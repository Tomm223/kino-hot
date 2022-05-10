import React, { FC } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useAction } from "../../../hook/useAction";
import { Search } from "../Search";
import { Logo } from "../Logo";

import style from './index.module.scss'
import { useNavigateParams } from "../../../hook/useNavigateParams";
import { URLQuery } from "../../../types/urlQuery";
const styles = style as any

const Header: FC = () => {

   const { FilmsListKeyWordChange } = useAction()
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

   return (
      <header className={styles.header}>
         <div className={styles.header_block}>
            <Logo func={HandleLogo} />
            <div className={styles.search}>
               <Search Change={HandleSearch} />
            </div>
            <div className={styles.person}>
               <div className={styles.person_btns}>
                  <div className={styles.person_btn}>
                     Вход
                  </div>
                  <div className={styles.person_btn}>
                     Регистрация
                  </div>
               </div>
               <div className={styles.person_img}></div>
            </div>
         </div>
      </header>
   )
}

export default Header