
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

   if (action.token) {
      setCookei('/', userURl, JSON.stringify({
         email: action.payload,
         token: action.token
      }))
   }

   else if (action.type === userOut) {
      removeCookie(userURl)
   }
   return next(action)
}



