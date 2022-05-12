import React, { FC, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { validationYup } from '../FormConstructor/validation'
import style from './index.module.scss'
import Form from "../FormConstructor";
import { ClassesFormConstructor, initStateFormConstructor } from "../../types/form";
const styles = style as any

interface AuthProps {
   store: {
      state: boolean,
      setState: React.Dispatch<SetStateAction<boolean>>,
      login: boolean,
      setLogin: React.Dispatch<SetStateAction<boolean>>,
   }
}

const Auth: FC<AuthProps> = ({ store }) => {
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

   return (
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
            <Form state={login ? InLogin : registrate}
               classes={{
                  form: styles.modal_form,
                  blockInput: styles.modal_form_block,
                  input: styles.modal_form_input,
                  btn: styles.modal_form_btn,
                  error: styles.modal_form_error
               }} />
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

   )
}

export default Auth


