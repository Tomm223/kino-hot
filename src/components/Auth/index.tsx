import React, { FC } from "react";

import style from './index.module.scss'
const styles = style as any

const Auth: FC = () => {

   return (
      <div className={styles.modal}>
         <div className={styles.modal_window}>
            <div className={styles.modal_title}>
               Вход
            </div>
            <hr />
            <form className={styles.modal_form}>
               <input name="email" className={styles.modal_form_input} type="text" placeholder="Email" />
               <input name="name" className={styles.modal_form_input} type="text" placeholder="Name" />
               <input name="password" className={styles.modal_form_input} type="text" placeholder="Password" />
               <button className={styles.modal_form_btn}>Auth</button>
            </form>
            <div className={styles.modal_close}>
               <img src="/img/close.png" alt="" />
            </div>
            <div className={styles.modal_route}>
               <a href="#">Если у вас нет аккаунта, то нажмите сюда</a>
            </div>
         </div>
      </div>
   )
}

export default Auth