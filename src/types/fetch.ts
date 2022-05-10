export type GetFilmsType = (pageNum: number) => Promise<PromiseGetFilms>


export interface PromiseGetFilms {
   keyword: string
   pagesCount: number
   films: FilmBase[]
}


export interface FilmBase {
   filmId: number,
   nameRu: string,
   nameEn: string,
   year: string,
   filmLength: string,
   countries: FilmCountry[],
   genres: FilmGenres[],
   rating: string,
   ratingVoteCount: number,
   posterUrl: string,
   posterUrlPreview: string,
   ratingChange: any | null
}
export interface FilmFull {
   kinopoiskId: number,
   imdbId: string,
   nameRu: string,
   nameEn: null | string,
   nameOriginal: string,
   posterUrl: string,
   posterUrlPreview: string,
   coverUrl: null | string,
   logoUrl: null | string,
   reviewsCount: number,
   ratingGoodReview: number,
   ratingGoodReviewVoteCount: number,
   ratingKinopoisk: number,
   ratingKinopoiskVoteCount: number,
   ratingImdb: number,
   ratingImdbVoteCount: number,
   ratingFilmCritics: number,
   ratingFilmCriticsVoteCount: number,
   ratingAwait: number,
   ratingAwaitCount: number,
   ratingRfCritics: null | number,
   ratingRfCriticsVoteCount: number,
   webUrl: string,
   year: number,
   filmLength: number,
   slogan: string,
   description: string,
   shortDescription: null | any,
   editorAnnotation: null | any,
   isTicketsAvailable: boolean,
   productionStatus: null | any,
   type: string,
   ratingMpaa: string,
   ratingAgeLimits: string,
   countries: FilmCountry[],
   genres: FilmGenres[],
   startYear: null | any,
   endYear: null | any,
   serial: boolean,
   shortFilm: boolean,
   completed: boolean,
   hasImax: boolean,
   has3D: boolean,
   lastSync: string

}
interface FilmCountry {
   country: string
}
interface FilmGenres {
   genre: string
}


export interface PromiseFilmsSimilar {
   total: number,
   items: FilmSimilar[]
}

export interface FilmSimilar {
   filmId: number,
   nameRu: string,
   nameEn: string,
   nameOriginal: string,
   posterUrl: string,
   posterUrlPreview: string,
   relationType: string,
   genres?: FilmGenres[],
   rating?: string,
   year?: string,
   filmLength?: string,
   countries?: FilmCountry[],
   ratingVoteCount?: number,
   ratingChange: any | null
}

export interface PromiseFilmImgs {
   total: number,
   totalPages: number,
   items: FilmImg[]
}

export interface FilmImg {
   imageUrl: string
   previewUrl: string
}

export interface FilmVideoType {
   url: string,
   name: string,
   site: string
}

export interface PromiseFilmVideo {
   total: number,
   items: FilmVideoType[]
}

export interface PromiseFilmsSearch {
   keyword: string,
   pagesCount: number,
   films: FilmSearch[]
}


export interface FilmSearch {
   filmId: number,
   nameRu: string,
   nameEn: string,
   type: string,
   year: string,
   description: string,
   filmLength: string,
   countries: FilmCountry[],
   genres: FilmGenres[],
   rating: string,
   ratingVoteCount: number,
   posterUrl: string,
   posterUrlPreview: string
}