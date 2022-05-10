import { RootType } from "../rootReducer";
import actions from '../actions'
import { LocalStorageTypes, URLQuery } from "../../types/urlQuery";
import { TypesFilmsList } from "../../types/redux/filmsList";
import { TypePredicateKind } from "typescript";

export const urlParams = (store) => (next) => (action) => {
   const search = localStorage.getItem(LocalStorageTypes.SEARCH)
   const collection = localStorage.getItem(LocalStorageTypes.COLLECTION)


   return next(action)
}