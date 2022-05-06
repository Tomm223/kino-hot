export enum TypesSimilarCarousel {
   SIMILAR_CAROUSEL_INIT = 'SIMIAR/CAROUSEL/INIT',
   SIMILAR_CAROUSEL_RESPONSIVE = 'SIMIAR/CAROUSEL/RESPONSIVE',
   SIMILAR_CAROUSEL_COUNTER = 'SIMIAR/CAROUSEL/COUNTER',
   SIMILAR_CAROUSEL_STEP = 'SIMIAR/CAROUSEL/STEP',
}
export interface SimilarCarouselInit {
   type: TypesSimilarCarousel.SIMILAR_CAROUSEL_INIT,
   payload: {
      maxCount: number,
      step: number,
      windowSimilar: number
   }
}
export interface SimilarCarouselResponsive {
   type: TypesSimilarCarousel.SIMILAR_CAROUSEL_RESPONSIVE,
   payload: {
      step: number,
      windowSimilar: number
   }
}
export interface SimilarCarouselCounter {
   type: TypesSimilarCarousel.SIMILAR_CAROUSEL_COUNTER,
   payload: number
}
export interface SimilarCarouselStep {
   type: TypesSimilarCarousel.SIMILAR_CAROUSEL_STEP,
   payload: number
}

export type ActionSimilarType = SimilarCarouselInit | SimilarCarouselResponsive | SimilarCarouselCounter | SimilarCarouselStep
