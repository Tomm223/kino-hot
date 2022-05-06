import React from "react";
import { ActionImgscarousel, TypesImgsCarousel } from "../../types/redux/ImgsCarousel";

export interface ImgsCarouselInitState {
   offsetLeft: number,
   step: number,
   stepCount: number,
   windowImgs: number,
   maxCount: number,
}

const initState: ImgsCarouselInitState = {
   offsetLeft: 0, // общее количества отступа px влево
   step: 0, // сколько один отступ
   stepCount: -1, // сколько было отступов в лево
   windowImgs: 0,
   maxCount: 0
}



export function ImgsCarousel(state = initState, action: ActionImgscarousel) {
   switch (action.type) {
      case TypesImgsCarousel.IMG_CAROUSEL_CHANGE:
         return {
            ...state,
            windowImgs: action.payload.windowImgs,
            step: action.payload.step,
            stepCount: action.payload.stepCount,
            maxCount: action.payload.maxCount
         }
      case TypesImgsCarousel.IMG_CAROUSEL_RESPONSIVE:
         return { ...state, windowImgs: action.payload.windowImgs, step: action.payload.step }
      case TypesImgsCarousel.IMG_CAROUSEL_COUNTER:
         return { ...state, stepCount: action.payload }
      case TypesImgsCarousel.IMG_CAROUSEL_STEP:
         return { ...state, offsetLeft: action.payload }
      default:
         return { ...state }
   }
}