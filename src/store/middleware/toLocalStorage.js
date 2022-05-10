import { TypesFilmsList } from "../../types/redux/filmsList"
import { LocalStorageTypes } from "../../types/urlQuery"

export const toLocalStorage = (store) => (next) => (action) => {
   if (action.type === TypesFilmsList.FILMS_CHANGED) {
      const store = store.getState()
      localStorage.setItem(LocalStorageTypes.SEARCH, store.films.keyword)
   }
}