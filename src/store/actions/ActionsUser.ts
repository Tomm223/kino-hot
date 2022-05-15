import { Dispatch } from "react";
import { StateFormConstructorLogin } from "../../types/form";
import { LocalStorageTypes } from "../../types/urlQuery";
import { ActionTypeUserReducer, TypesUserReducer, User, UserChange, UserCreate, UserOut } from "../../types/redux/user";

function CreateErr(this: any, str: string) {
   this.message = 'не число'
   this.name = "Notel"
}

export function ActionUserLogin(loginState: StateFormConstructorLogin) {
   return (dispatch: Dispatch<ActionTypeUserReducer>) => {
      try {
         const user = JSON.parse(localStorage.getItem(LocalStorageTypes.USER) || '') as User
         if (user) {
            user.email === loginState.email && user.password === loginState.password ?
               dispatch({
                  type: TypesUserReducer.USER_CHANGE,
                  payload: user
               })
               :
               dispatch({
                  type: TypesUserReducer.USER_ERROR_OPEN,
                  payload: 'Неверный Email или пароль.'
               })
            setTimeout(() => {
               dispatch({
                  type: TypesUserReducer.USER_ERROR_CLOSE
               })
            }, 3000)
            //Error('Неверный Email или пароль')

         }
         else {
            throw ''
         }

      }
      catch (e) {
         dispatch({
            type: TypesUserReducer.USER_ERROR_OPEN,
            payload: "Этот Email не был зарегестрирован, пожалуйста, зарегестрируйтесь."
         })
         setTimeout(() => {
            dispatch({
               type: TypesUserReducer.USER_ERROR_CLOSE
            })
         }, 3000)
      }
   }
}
export function ActionUserChange(user: User): UserChange {
   return {
      type: TypesUserReducer.USER_CHANGE,
      payload: user
   }
}
function Error(str: string) {
   return (dispatch: Dispatch<ActionTypeUserReducer>) => {
      dispatch({
         type: TypesUserReducer.USER_ERROR_OPEN,
         payload: str
      })
      setTimeout(() => {
         dispatch({
            type: TypesUserReducer.USER_ERROR_CLOSE
         })
      }, 3000)
   }
}
export function ActionUserOut(user: null): UserOut {
   return {
      type: TypesUserReducer.USER_OUT,
   }
}
export function ActionUserCreate(user: User): UserCreate {
   return {
      type: TypesUserReducer.USER_CREATE,
      payload: user
   }
}