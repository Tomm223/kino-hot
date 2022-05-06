import React from "react";
import { useMediaQuery } from 'react-responsive'

export function useResponsive() {
   const minLabTop = useMediaQuery({ query: '(min-width: 1024px)' })
   const maxLabTop = useMediaQuery({ query: '(max-width: 1024px)' })
   const minTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const maxTablet = useMediaQuery({ query: '(max-width: 768px)' })
   const minMonitor = useMediaQuery({ query: '(min-width: 1440px)' })
   const maxMonitor = useMediaQuery({ query: '(max-width: 1440px)' })
   const minFon = useMediaQuery({ query: '(min-width: 425px)' })
   const maxFon = useMediaQuery({ query: '(max-width: 425px)' })

   function buildWidowImgsWidth(): number {
      let amountImgs = 0
      if (minLabTop && maxMonitor) {
         amountImgs = 7
      }
      else if (minTablet && maxLabTop) {
         amountImgs = 5
      }
      else if (minFon && maxTablet) {
         amountImgs = 3
      }
      else if (minMonitor) {
         amountImgs = 8
      }

      return amountImgs
   }
   function buildStepImgsWidth(): number {
      let step = 0
      if (minLabTop && maxMonitor) {
         step = 156
      }
      else if (minTablet && maxLabTop) {
         step = 136
      }
      else if (minFon && maxTablet) {
         step = 146
      }
      else if (minMonitor) {
         step = 156
      }

      return step
   }
   function buildSimalarWidowWidth(): number {
      let amountImgs = 0
      if (minLabTop && maxMonitor) {
         amountImgs = 5
      }
      else if (minTablet && maxLabTop) {
         amountImgs = 4
      }
      else if (minFon && maxTablet) {
         amountImgs = 4
      }
      else if (minMonitor) {
         amountImgs = 5
      }

      return amountImgs
   }
   function buildSimalarStepWidth(): number {
      let step = 0
      if (minLabTop && maxMonitor) {
         step = 200
      }
      else if (minTablet && maxLabTop) {
         step = 200
      }
      else if (minFon && maxTablet) {
         step = 120
      }
      else if (minMonitor) {
         step = 240
      }

      return step
   }




   return {
      minLabTop,
      maxLabTop,
      minTablet,
      maxTablet,
      minMonitor,
      maxMonitor,
      minFon,
      maxFon,
      ImgCarousel_Func: {
         buildWidowImgsWidth,
         buildStepImgsWidth
      },
      SimilarCarousel_Func: {
         buildSimalarWidowWidth,
         buildSimalarStepWidth
      }
   }
}