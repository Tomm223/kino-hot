import { ActionGalleryCarousel, TypesGalleryReduc } from "../../types/redux/gallery"

export interface GalleryInitState {
   offsetLeft: number, // общее количества отступа px влево
   step: number, // сколько один отступ
   stepCount: number, // сколько было отступов в лево
   window: number,
   maxCount: number | null,
   show: boolean
}

const initState: GalleryInitState = {
   show: false,
   offsetLeft: 0, // общее количества отступа px влево
   step: 0, // сколько один отступ
   stepCount: 0, // сколько было отступов в лево
   window: 0,
   maxCount: 0
}



export function GalleryCarousel(state = initState, action: ActionGalleryCarousel) {
   switch (action.type) {
      case TypesGalleryReduc.GALLERY_CAROUSEL_CHANGE:
         return {
            ...state,
            windowImgs: action.payload.window,
            step: action.payload.step,
            maxCount: action.payload.maxCount
         }
      case TypesGalleryReduc.GALLERY_CAROUSEL_RESPONSIVE:
         return { ...state, stepCount: 0, window: action.payload.window, step: action.payload.step }
      case TypesGalleryReduc.GALLERY_CAROUSEL_COUNTER:
         return { ...state, stepCount: action.payload }
      case TypesGalleryReduc.GALLERY_CAROUSEL_OUT:
         return { ...state, show: false }
      case TypesGalleryReduc.GALLERY_CAROUSEL_OPEN:
         return { ...state, show: true, stepCount: action.payload }
      case TypesGalleryReduc.GALLERY_CAROUSEL_STEP:
         return { ...state, offsetLeft: action.payload }
      default:
         return { ...state }
   }
} 