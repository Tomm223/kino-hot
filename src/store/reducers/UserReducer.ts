import { ActionTypeUserReducer, TypesUserReducer, User } from "../../types/redux/user"

interface userReducerState {
   user: User | null
   error: null | string,
   loading: boolean
}

const initState: userReducerState = {
   user: null,
   loading: false,
   error: null
}

export function userReducer(state = initState, action: ActionTypeUserReducer) {
   switch (action.type) {
      case TypesUserReducer.USER_LOADING:
         return { ...state, loading: true }
      case TypesUserReducer.USER_CHANGE:
         return { ...state, loading: false, user: action.payload }
      case TypesUserReducer.USER_CREATE:
         return { ...state, loading: false, user: action.payload }
      case TypesUserReducer.USER_OUT:
         return { ...state, user: null }
      case TypesUserReducer.USER_GET_SEASON_STORE:
         return { ...state, user: action.payload }
      case TypesUserReducer.USER_ERROR_OPEN:
         return { ...state, loading: false, error: action.payload }
      case TypesUserReducer.USER_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}