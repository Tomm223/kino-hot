import { SimilarCarouselCounter, SimilarCarouselInit, SimilarCarouselResponsive, SimilarCarouselStep, TypesSimilarCarousel } from "../../types/redux/similarCarousel";


export function ActionSimilarCarouselInit(step: number, amountSimialr: number, total: number): SimilarCarouselInit {
   let max = 0
   if (total > amountSimialr) {
      max = total - amountSimialr
   }

   return {
      type: TypesSimilarCarousel.SIMILAR_CAROUSEL_INIT,
      payload: {
         maxCount: max,
         step,
         windowSimilar: step * amountSimialr
      }
   }
}

export function ActionSimilarResponsive(step: number, amountImg: number): SimilarCarouselResponsive {
   return {
      type: TypesSimilarCarousel.SIMILAR_CAROUSEL_RESPONSIVE,
      payload: {
         step,
         windowSimilar: step * amountImg,
      }
   }
}

export function ActionSimialarCounter(leftSide: boolean, count: number, maxCount: number): SimilarCarouselCounter {
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
      type: TypesSimilarCarousel.SIMILAR_CAROUSEL_COUNTER,
      payload: resp
   }
}

export function ActionSimilarStep(step: number, stepCount: number): SimilarCarouselStep {
   return {
      type: TypesSimilarCarousel.SIMILAR_CAROUSEL_STEP,
      payload: step * stepCount
   }
}