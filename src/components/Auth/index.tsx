import React, { FC, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { validationYupLogin, validationYupRegistration } from '../FormConstructor/validation'
import style from './index.module.scss'
import Form from "../FormConstructor";
import { ClassesFormConstructor, initStateFormConstructor, StateFormConstructorLogin, StateFormConstructorRegistration } from "../../types/form";
import { User } from "../../types/redux/user";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { AlertError } from "../UI/Alert";
import { LocalStorageTypes } from "../../types/urlQuery";
const styles = style as any

interface AuthProps {
   store: {
      state: boolean,
      setState: React.Dispatch<SetStateAction<boolean>>,
      login: boolean,
      setLogin: React.Dispatch<SetStateAction<boolean>>,
   }
   user: User | null
}

const Auth: FC<AuthProps> = ({ store, user }) => {
   const state = store.state
   const setState = store.setState
   const login = store.login
   const setLogin = store.setLogin

   const modal = useRef<HTMLDivElement>(null)
   const closeDIV = useRef<HTMLDivElement>(null)
   const closeIMG = useRef<HTMLImageElement>(null)

   function Handle(e: React.MouseEvent<HTMLDivElement>) {
      const block = e.target
      if (modal.current === block || closeDIV.current === block || closeIMG.current === block) {
         setState(false)
         setLogin(true)
      }
   }
   const registrate: initStateFormConstructor = {
      name: '',
      email: '',
      password: ''
   }
   const InLogin: initStateFormConstructor = {
      email: '',
      password: ''
   }
   const alert = useTypeSelector(state => state.user.error)
   const { ActionUserLogin, ActionUserCreate } = useAction()

   if (user) {
      setTimeout(() => {
         setState(false)
      }, 300)

      return (
         <></>
      )
   }

   return (

      <>
         <AlertError alert={alert} />
         <div ref={modal} onClick={Handle}
            style={{ display: state ? 'block' : 'none' }} className={styles.modal}>
            <div className={styles.modal_window}>
               <div className={styles.modal_title}>
                  {login ?
                     <p>Вход</p>
                     :
                     <p>Регистрация</p>
                  }
               </div>
               <hr />
               {login
                  ?
                  <Form state={InLogin} validate={validationYupLogin} onSubmit={ActionUserLogin} />
                  :
                  <Form state={registrate} validate={validationYupRegistration} onSubmit={ActionUserCreate} />
               }

               <div ref={closeDIV} className={styles.modal_close}>
                  <img ref={closeIMG} src="/img/close.png" alt="" />
               </div>
               {login &&
                  <div onClick={() => setLogin(false)} className={styles.modal_route}>
                     <a href="#">Если у вас нет аккаунта, то нажмите сюда</a>
                  </div>
               }

            </div>
         </div>
      </>
   )
}

export default Auth


