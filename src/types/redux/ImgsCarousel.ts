import { ImgsCarouselInitState } from "../../store/reducers/ImgsCaroules"

export enum TypesImgsCarousel {
   IMG_CAROUSEL_CHANGE = 'IMGS/CAROUSEL/CHANGE',
   IMG_CAROUSEL_RESPONSIVE = 'IMGS/CAROUSEL/RESPONSIVE',
   IMG_CAROUSEL_COUNTER = 'IMGS/CAROUSEL/COUNTER',
   IMG_CAROUSEL_STEP = 'IMGS/CAROUSEL/STEP'
}

export interface ImgsCarouselChange {
   type: TypesImgsCarousel.IMG_CAROUSEL_CHANGE,
   payload: {
      stepCount: number,
      step: number,
      windowImgs: number,
      maxCount: number
   }
}
export interface ImgsCaroulesResponsive {
   type: TypesImgsCarousel.IMG_CAROUSEL_RESPONSIVE,
   payload: {
      windowImgs: number,
      step: number
   }
}
export interface ImgsCaroulesCounter {
   type: TypesImgsCarousel.IMG_CAROUSEL_COUNTER,
   payload: number
}
export interface ImgsCaroulesStep {
   type: TypesImgsCarousel.IMG_CAROUSEL_STEP,
   payload: number
}

export type ActionImgscarousel = ImgsCarouselChange | ImgsCaroulesResponsive | ImgsCaroulesCounter | ImgsCaroulesStep
