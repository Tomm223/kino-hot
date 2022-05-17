
import removeCookie from "../../hook/cookie/removeCookie"
import setCookei from "../../hook/cookie/setCookie"
import { TypesFilmReduc } from "../../types/redux/filmItem"
import { TypesUserReducer } from "../../types/redux/user"
import { LocalStorageTypes } from "../../types/urlQuery"

const userURl = LocalStorageTypes.USER
const userChange = TypesUserReducer.USER_CHANGE
const userCreate = TypesUserReducer.USER_CREATE
const userOut = TypesUserReducer.USER_OUT

export const putStorages = (store) => (next) => (action) => {

   if (action.type === userCreate) {
      localStorage.setItem(userURl, JSON.stringify(action.payload))
      sessionStorage.setItem(userURl, JSON.stringify(action.payload))
      setCookei('/', userURl, JSON.stringify(action.payload))
   }
   else if (action.type === userChange) {
      setCookei('/', userURl, JSON.stringify(action.payload))
      sessionStorage.setItem(userURl, JSON.stringify(action.payload))
   }
   else if (action.type === userOut) {
      removeCookie(userURl)
      sessionStorage.removeItem(userURl)
   }
   return next(action)
}



