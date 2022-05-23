
import React from "react";
import { useMediaQuery } from 'react-responsive'

export function useResponsive() {
   const minErr = useMediaQuery({ query: '(min-width: 999999px)' })
   const minBigMonitor = useMediaQuery({ query: '(min-width: 1920px)' })
   const maxBigMonitor = useMediaQuery({ query: '(max-width: 1920px)' })
   const minMonitor = useMediaQuery({ query: '(min-width: 1440px)' })
   const maxMonitor = useMediaQuery({ query: '(max-width: 1440px)' })
   const minLabTop = useMediaQuery({ query: '(min-width: 1024px)' })
   const maxLabTop = useMediaQuery({ query: '(max-width: 1024px)' })
   const minTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const maxTablet = useMediaQuery({ query: '(max-width: 768px)' })
   const minFon = useMediaQuery({ query: '(min-width: 125px)' })
   const maxFon = useMediaQuery({ query: '(max-width: 425px)' })
   const minPX = useMediaQuery({ query: '(max-width: 20px)' })
   //Filmimg
   function buildWidowImgsWidth(): number {
      const arr = [
         { query: minPX, response: 1 }, { query: minFon, response: 3 }, { query: minTablet, response: 4 },
         { query: minLabTop, response: 5 }, { query: minMonitor, response: 6 },
         { query: minBigMonitor, response: 7 }, { query: minErr, response: 0 },]

      const amount = arr.find((item, i) => !arr[i + 1].query && item.query)

      return amount?.response || 0
   }
   function buildStepImgsWidth(): number {
      const arr = [
         { query: minPX, response: 100 }, { query: minFon, response: 146 }, { query: minTablet, response: 126 },
         { query: minLabTop, response: 146 }, { query: minMonitor, response: 176 },
         { query: minBigMonitor, response: 206 }, { query: minErr, response: 0 }]

      let step = arr.find((item, i) => !arr[i + 1].query && item.query)

      return step?.response || 0
   }
   //FilmimSilar
   function buildSimalarWidowWidth(): number {

      const arr = [
         { query: minPX, response: 1 }, { query: minFon, response: 3 }, { query: minTablet, response: 3 },
         { query: minLabTop, response: 5 }, { query: minMonitor, response: 6 },
         { query: minBigMonitor, response: 6 }, { query: minErr, response: 0 },]

      const amount = arr.find((item, i) => !arr[i + 1].query && item.query)

      return amount?.response || 0
   }
   function buildSimalarStepWidth(): number {

      const arr = [
         { query: minPX, response: 100 }, { query: minFon, response: 150 }, { query: minTablet, response: 180 },
         { query: minLabTop, response: 180 }, { query: minMonitor, response: 240 },
         { query: minBigMonitor, response: 240 }, { query: minErr, response: 0 }]

      let step = arr.find((item, i) => !arr[i + 1].query && item.query)

      return step?.response || 0
   }
   //PAgination
   function buildPaginationPagesSide(): number {
      const arr = [
         { query: minPX, response: 3 }, { query: minFon, response: 3 }, { query: minTablet, response: 3 },
         { query: minLabTop, response: 4 }, { query: minMonitor, response: 5 },
         { query: minBigMonitor, response: 5 }, { query: minErr, response: 0 },]

      const amount = arr.find((item, i) => !arr[i + 1].query && item.query)

      return amount?.response || 0
   }
   //Gallery
   function buildGalleryStepWidth(): number {
      const arr = [
         { query: minPX, response: 300 }, { query: minFon, response: 500 }, { query: minTablet, response: 800 },
         { query: minLabTop, response: 800 }, { query: minMonitor, response: 1000 },
         { query: minBigMonitor, response: 1500 }, { query: minErr, response: 0 },]

      const amount = arr.find((item, i) => !arr[i + 1].query && item.query)

      return amount?.response || 0
   }

   function buildFilmCardWidth(): number {
      const arr = [
         { query: minPX, response: 100 }, { query: minFon, response: 5 }, { query: minTablet, response: 4 },
         { query: minLabTop, response: 5 }, { query: minMonitor, response: 6 },
         { query: minBigMonitor, response: 7 }, { query: minErr, response: 0 },]

      const amount = arr.find((item, i) => !arr[i + 1].query && item.query)

      return amount?.response || 0
   }


   return {
      mediaSizeArr: [
         maxBigMonitor,
         maxLabTop,
         maxTablet,
         maxMonitor,
         maxFon,
      ],
      ImgCarousel_Func: {
         buildWidowWidth: buildWidowImgsWidth,
         buildStepWidth: buildStepImgsWidth
      },
      SimilarCarousel_Func: {
         buildWidowWidth: buildSimalarWidowWidth,
         buildStepWidth: buildSimalarStepWidth
      },
      PaginationResponsive_Func: {
         buildSidePages: buildPaginationPagesSide
      },
      GalleryResponsive_Func: {
         buildStep: buildGalleryStepWidth
      }
   }
}