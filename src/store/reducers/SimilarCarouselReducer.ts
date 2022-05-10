import { ActionFilmReduc } from "../../types/redux/filmItem"
import { ActionSimilarType, TypesSimilarCarousel } from "../../types/redux/similarCarousel"
import { ActionImgsCarouselCounter } from "../actions/ActionsImgsCarousel"

export interface SimilarCarouselState {
   maxCount: number,
   offsetRight: number,
   step: number,
   stepCount: number,
   windowSimilar: number
}

const initState: SimilarCarouselState = {
   maxCount: 0, // total - amountImg
   offsetRight: 0, // общее количества отступа px влево
   step: 0, // сколько один отступ
   stepCount: 0, // сколько было отступов в лево
   windowSimilar: 0
}

export function SimilarCarouselReducer(state = initState, action: ActionSimilarType) {

   switch (action.type) {
      case TypesSimilarCarousel.SIMILAR_CAROUSEL_INIT:
         return {
            ...state,
            stepCount: 0,
            step: action.payload.step,
            maxCount: action.payload.maxCount,
            windowSimialr: action.payload.windowSimilar
         }
      case TypesSimilarCarousel.SIMILAR_CAROUSEL_RESPONSIVE:
         return { ...state, stepCount: 0, step: action.payload.step, windowSimilar: action.payload.windowSimilar }
      case TypesSimilarCarousel.SIMILAR_CAROUSEL_COUNTER:
         return { ...state, stepCount: action.payload }
      case TypesSimilarCarousel.SIMILAR_CAROUSEL_STEP:
         return { ...state, offsetRight: action.payload }
      default:
         return { ...state }
   }

}