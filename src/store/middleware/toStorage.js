
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
   }
   else if (action.type === userChange) {
      sessionStorage.setItem(userURl, JSON.stringify(action.payload))
   }
   else if (action.type === userOut) {
      sessionStorage.removeItem(userURl)
   }
   return next(action)
}



