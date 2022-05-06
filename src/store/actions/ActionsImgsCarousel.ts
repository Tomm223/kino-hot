import { ImgsCaroulesCounter, ImgsCaroulesResponsive, ImgsCaroulesStep, ImgsCarouselChange, TypesImgsCarousel } from "../../types/redux/ImgsCarousel";


export function ActionImgsCarouselInit(stepCount: number, step: number, amountImgs: number, totalImgs: number): ImgsCarouselChange {

   const initCount = -1
   let max = 0
   if (totalImgs) {
      max = totalImgs > amountImgs ? totalImgs - amountImgs + 1 : initCount
   }
   else {
      max = 999
   }

   return {
      type: TypesImgsCarousel.IMG_CAROUSEL_CHANGE,
      payload: {
         stepCount: initCount,
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
   const initCount = -1

   if (left) {
      if (count === initCount) {
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

