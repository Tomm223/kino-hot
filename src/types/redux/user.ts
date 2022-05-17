export interface User {
   name: string,
   email: string,
   password: string
}
export enum TypesUserReducer {
   USER_LOADING = 'USER/LOADING',
   USER_CHANGE = 'USER/CHANGE',
   USER_OUT = 'USER/OUT',
   USER_CREATE = 'USER/CREATE',
   USER_ERROR_OPEN = "USER/ERR/OPEN",
   USER_ERROR_CLOSE = "USER/ERR/CLOSE",
   USER_GET_SEASON_STORE = 'USER/GET/SEASON/STORE'
}

export interface UserLoading {
   type: TypesUserReducer.USER_LOADING
}
export interface UserChange {
   type: TypesUserReducer.USER_CHANGE,
   payload: User
}
export interface UserGetSeasonStore {
   type: TypesUserReducer.USER_GET_SEASON_STORE,
   payload: User
}
export interface UserOut {
   type: TypesUserReducer.USER_OUT
}
export interface UserCreate {
   type: TypesUserReducer.USER_CREATE,
   payload: User
}
export interface UserErrOpen {
   type: TypesUserReducer.USER_ERROR_OPEN,
   payload: string
}
export interface UserErrClose {
   type: TypesUserReducer.USER_ERROR_CLOSE
}

export type ActionTypeUserReducer = UserChange | UserCreate |
   UserErrOpen | UserErrClose | UserOut | UserGetSeasonStore | UserLoading
