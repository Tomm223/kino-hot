import { Dispatch } from "react";
import { StateFormConstructorLogin } from "../../types/form";
import { LocalStorageTypes } from "../../types/urlQuery";
import { ActionTypeUserReducer, TypesUserReducer, User, UserChange, UserCreate, UserOut } from "../../types/redux/user";
import { string } from "yup";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

function CreateErr(this: any, str: string) {
   this.message = 'не число'
   this.name = "Notel"
}

export function ActionUserLogin(loginState: StateFormConstructorLogin) {
   return async (dispatch: Dispatch<ActionTypeUserReducer>) => {
      dispatch({
         type: TypesUserReducer.USER_LOADING
      })
      const auth = getAuth();
      signInWithEmailAndPassword(auth, loginState.email, loginState.password)
         .then(async (userCredential) => {
            const user = userCredential.user;
            const token = await user.getIdToken()
            dispatch({
               type: TypesUserReducer.USER_CHANGE,
               payload: user.email || '',
               token: token
            })
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch({
               type: TypesUserReducer.USER_ERROR_OPEN,
               payload: errorCode + errorMessage
            })
            setTimeout(() => {
               dispatch({
                  type: TypesUserReducer.USER_ERROR_CLOSE
               })
            }, 4000)
         });

   }
}



export function ActionUserCreate(loginState: StateFormConstructorLogin) {
   return async (dispatch: Dispatch<ActionTypeUserReducer>) => {
      dispatch({
         type: TypesUserReducer.USER_LOADING
      })
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, loginState.email, loginState.password)
         .then(async (userCredential) => {
            const user = userCredential.user;
            const token = await user.getIdToken()
            console.log(user);

            dispatch({
               type: TypesUserReducer.USER_CHANGE,
               payload: user.email || '',
               token: token
            })
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch({
               type: TypesUserReducer.USER_ERROR_OPEN,
               payload: errorCode + errorMessage
            })
            setTimeout(() => {
               dispatch({
                  type: TypesUserReducer.USER_ERROR_CLOSE
               })
            }, 4000)
         });

   }
}

export function ActionUserChange(user: string): UserCreate {
   return {
      type: TypesUserReducer.USER_CREATE,
      payload: user,

   }
}
export function ActionUserError(str: string) {
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
export function ActionUserOut(): UserOut {
   return {
      type: TypesUserReducer.USER_OUT,
   }
}
