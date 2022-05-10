import { FilmImg } from "../fetch"



export enum TypesFilmImgsReduc {
   IMGS_LOADING = "IMGS/LOADING",
   IMGS_CHANGE = "IMGS/CHANGE",
   IMGS_ERROR_OPEN = "IMGS/ERROR/OPEN",
   IMGS_ERROR_CLOSE = "IMGS/ERROR/CLOSE"
}


export type ActionFilmImgsReduc = ImgsErrClose | ImgsErrOpen | ImgsLoading | ImgsChange
export interface ImgsChange {
   type: TypesFilmImgsReduc.IMGS_CHANGE,
   payload: PromiseImgsState
}
export interface ImgsDelete {
   type: TypesFilmImgsReduc.IMGS_CHANGE,
   payload: ImgsStateDelete
}

export interface ImgsLoading {
   type: TypesFilmImgsReduc.IMGS_LOADING
}
export interface ImgsErrOpen {
   type: TypesFilmImgsReduc.IMGS_ERROR_OPEN,
   payload: string
}
export interface ImgsErrClose {
   type: TypesFilmImgsReduc.IMGS_ERROR_CLOSE
}


export interface PromiseImgsState {
   items: FilmImg[],
   total: number,
   totalPages: number
}
export interface ImgsStateDelete {
   items: never[],
   total: number,
   totalPages: number
}