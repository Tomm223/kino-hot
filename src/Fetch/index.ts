import React from "react";
import axios from 'axios'
import { FilmFull, GetFilmsType, PromiseFilmImgs, PromiseFilmsSearch, PromiseFilmsSimilar, PromiseFilmVideo, PromiseGetFilms } from "../types/fetch";
import { SingInUser } from "../types/redux/user";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";



export async function GetTop100Films(pageNum: number = 1): Promise<PromiseGetFilms> {
   const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pageNum}`, {
      method: 'GET',
      headers: {
         'X-API-KEY': 'efd67088-b8b2-4e61-b81c-b689fd30b6af',
         'Content-Type': 'application/json',
      },
   })
   return {
      keyword: '',
      films: resp.data.films,
      pagesCount: resp.data.pagesCount
   }
}

export async function GetFilmId(id: string | number): Promise<FilmFull> {
   const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: 'GET',
      headers: {
         'X-API-KEY': 'efd67088-b8b2-4e61-b81c-b689fd30b6af',
         'Content-Type': 'application/json',
      },
   })
   return resp.data
}
export async function GetFilmImgs(id: string | Number): Promise<PromiseFilmImgs> {
   const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`, {
      method: 'GET',
      headers: {
         'X-API-KEY': 'efd67088-b8b2-4e61-b81c-b689fd30b6af',
         'Content-Type': 'application/json',
      },
   })
   return resp.data
}

export async function GetFilmsSimilar(id: number | string): Promise<PromiseFilmsSimilar> {
   const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
      method: 'GET',
      headers: {
         'X-API-KEY': 'efd67088-b8b2-4e61-b81c-b689fd30b6af',
         'Content-Type': 'application/json',
      },
   })
   return resp.data
}

export async function GetFilmVideo(id: number): Promise<PromiseFilmVideo> {
   const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`, {
      method: 'GET',
      headers: {
         'X-API-KEY': 'efd67088-b8b2-4e61-b81c-b689fd30b6af',
         'Content-Type': 'application/json',
      },
   })
   return resp.data
}

export async function SearchFilms(str: string, page: number = 1): Promise<PromiseFilmsSearch> {
   const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${str}&page=${page}`, {
      method: 'GET',
      headers: {
         'X-API-KEY': 'efd67088-b8b2-4e61-b81c-b689fd30b6af',
         'Content-Type': 'application/json',
      },
   })
   return {
      keyword: resp.data.keyword,
      films: resp.data.films,
      pagesCount: resp.data.pagesCount
   }
}







