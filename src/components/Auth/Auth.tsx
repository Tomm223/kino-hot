import React, { FC } from "react";

const Auth: FC = () => {


   return (
      <div className="modal">
         <div className="modal-auth">
            <div className="modal-auth__title">
               Вход/Регистрация
            </div>
            <form className="modal-auth__form">
               <input name="email" className="modal-auth__form-input" type="text" placeholder="Email" />
               <input name="name" className="modal-auth__form-input" type="text" placeholder="Name" />
               <input name="password" className="modal-auth__form-input" type="text" placeholder="Password" />
               <button className="modal-auth__form-btn">Auth</button>
            </form>
            <div className="modal-auth__route">
               <a href="#" className="moda-auth__route-link">Если у вас нет аккаунта, то нажмите сюда</a>
            </div>
         </div>
      </div>
   )
}