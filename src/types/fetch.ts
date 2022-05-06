export type GetFilmsType = (pageNum: number) => Promise<PromiseGetFilms>


export interface PromiseGetFilms {
   pagesCount: number
   films: Film[]
}


export interface Film {
   filmId: number,
   nameRu: string,
   nameEn: string,
   year: string,
   description?: string,
   kinopoiskId?: number,
   filmLength: string,
   countries: FilmCountry[],
   genres: FilmGenres[],
   rating: string,
   ratingVoteCount: number,
   posterUrl: string,
   posterUrlPreview: string,
   ratingChange: any | null
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