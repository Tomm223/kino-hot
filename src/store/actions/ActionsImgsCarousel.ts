import { ImgsCaroulesCounter, ImgsCaroulesResponsive, ImgsCaroulesStep, ImgsCarouselChange, TypesImgsCarousel } from "../../types/redux/ImgsCarousel";


export function ActionImgsCarouselInit(step: number, amountImgs: number, totalImgs: number): ImgsCarouselChange {

   const initCount = 0
   let max: number | null = 0
   if (totalImgs) {
      totalImgs = totalImgs > 20 ? 20 : totalImgs
      max = totalImgs > amountImgs ? totalImgs - amountImgs : initCount
   }
   else {
      max = null
   }

   return {
      type: TypesImgsCarousel.IMG_CAROUSEL_CHANGE,
      payload: {
         stepCount: 0,
         step: step,
         windowImgs: step * amountImgs,
         maxCount: max

      }
   }
}
export function ActionImgsCarouselResponsive(step: number, stepCount: number): ImgsCaroulesResponsive {
   return {
      type: TypesImgsCarousel.IMG_CAROUSEL_RESPONSIVE,
      payload: {
         step,
         windowImgs: step * stepCount
      }
   }
}
export function ActionImgsCarouselCounter(left: boolean, count: number, maxCount: number): ImgsCaroulesCounter {
   let resp = 0


   if (left) {
      if (count === 0) {
         resp = count
      }
      else {
         resp = count - 1
      }
   }
   else {
      if (count === maxCount) {
         resp = count
      }
      else {
         resp = count + 1
      }
   }

   return {
      type: TypesImgsCarousel.IMG_CAROUSEL_COUNTER,
      payload: resp
   }
}
export function ActionImgscarouselStep(count: number, step: number): ImgsCaroulesStep {
   return {
      type: TypesImgsCarousel.IMG_CAROUSEL_STEP,
      payload: count * step
   }
}

