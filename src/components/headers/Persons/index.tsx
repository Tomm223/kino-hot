import React, { FC, SetStateAction } from "react";
import { User } from "../../../types/redux/user";
import style from './index.module.scss'
const styles = style as any

interface PersonProps {
   setModal: React.Dispatch<SetStateAction<boolean>>
   setLogin: React.Dispatch<SetStateAction<boolean>>
   user: string | null
   UserOut: any
}

export const Person: FC<PersonProps> = ({ user, setModal, setLogin, UserOut }) => {

   if (user) {

      return (
         <div className={styles.person}>
            <div className={styles.person_btns}>
               <div className={styles.person_btn} onClick={UserOut}>Выход</div>
               <div className={styles.person_name}>
                  <p className={''}>{user}</p>
               </div>
            </div>
            <div className={styles.person_img}>
               <img src="/img/icons8-person-64.png" alt="" />
            </div>
         </div>
      )
   }

   return (
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
   )
}