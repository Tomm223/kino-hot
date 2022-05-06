import React, { FC } from "react";
import { NavLink } from 'react-router-dom'
const Header: FC = () => {


   return (
      <header className="header">
         <div className="header__block">
            <NavLink to='/'>
               <div className="header__logo-block">
                  <h1 className="header__logo-title">KiNo-Hot</h1>
               </div>
            </NavLink>
            <form className="header__search-form">
               <input className="header__search-input" type="text" />
               <button className="header__search-btn">Click</button>
            </form>
            <div className="header__person-block">
               <div className="header__person-btns">
                  <div className="header__person-btn">
                     Вход
                  </div>
                  <div className="header__person-btn">
                     Регистрация
                  </div>
               </div>
               <div className="header__person-img"></div>
            </div>
         </div>
      </header>
   )
}

export default Header