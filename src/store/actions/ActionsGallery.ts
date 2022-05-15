import { GalleryCaroulesCounter, GalleryCaroulesOpen, GalleryCaroulesOut, GalleryCaroulesResponsive, GalleryCaroulesStep, GalleryCarouselChange, TypesGalleryReduc } from "../../types/redux/gallery"

export function ActionGalleryCarouselInit(step: number, amount: number, total: number): GalleryCarouselChange {
   let max: number | null = 0
   if (total) {
      total = total > 20 ? 20 : total
      max = total > amount ? total - amount : 1
   }
   else {
      max = null
   }
   return {
      type: TypesGalleryReduc.GALLERY_CAROUSEL_CHANGE,
      payload: {
         maxCount: max,
         step,
         window: step * amount,
      }
   }
}

export function ActionGalleryOut(): GalleryCaroulesOut {
   return {
      type: TypesGalleryReduc.GALLERY_CAROUSEL_OUT,
   }
}
export function ActionGalleryOpen(stepId: number): GalleryCaroulesOpen {
   return {
      type: TypesGalleryReduc.GALLERY_CAROUSEL_OPEN,
      payload: stepId
   }
}

export function ActionGalleryResponsive(step: number, amountImg: number): GalleryCaroulesResponsive {
   return {
      type: TypesGalleryReduc.GALLERY_CAROUSEL_RESPONSIVE,
      payload: {
         step,
         window: step * amountImg,
      }
   }
}
export function ActionGalleryCarouselSelectStepCount(num: number): GalleryCaroulesCounter {
   return {
      type: TypesGalleryReduc.GALLERY_CAROUSEL_COUNTER,
      payload: num
   }
}
export function ActionGalleryCounter(leftSide: boolean, count: number, maxCount: number): GalleryCaroulesCounter {
   let resp = 0
   const initCount = 0

   if (leftSide) {
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
      type: TypesGalleryReduc.GALLERY_CAROUSEL_COUNTER,
      payload: resp
   }
}

export function ActionGalleryStep(step: number, stepCount: number): GalleryCaroulesStep {
   return {
      type: TypesGalleryReduc.GALLERY_CAROUSEL_STEP,
      payload: step * stepCount
   }
}