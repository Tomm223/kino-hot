
export enum TypesGalleryReduc {
   GALLERY_CAROUSEL_OUT = 'GALLERY_CAROUSEL_OUT',
   GALLERY_CAROUSEL_OPEN = 'GALLERY/CAROUSEL/OPEN',
   GALLERY_CAROUSEL_CHANGE = 'GALLERY/CAROUSEL/CHANGE',
   GALLERY_CAROUSEL_RESPONSIVE = 'GALLERY/CAROUSEL/RESPONSIVE',
   GALLERY_CAROUSEL_COUNTER = 'GALLERY/CAROUSEL/COUNTER',
   GALLERY_CAROUSEL_STEP = 'GALLERY/CAROUSEL/STEP'
}

export interface GalleryCarouselChange {
   type: TypesGalleryReduc.GALLERY_CAROUSEL_CHANGE,
   payload: {
      window: number,
      step: number,
      maxCount: number | null
   }
}
export interface GalleryCaroulesResponsive {
   type: TypesGalleryReduc.GALLERY_CAROUSEL_RESPONSIVE,
   payload: {
      window: number,
      step: number
   }
}
export interface GalleryCaroulesCounter {
   type: TypesGalleryReduc.GALLERY_CAROUSEL_COUNTER,
   payload: number
}
export interface GalleryCaroulesStep {
   type: TypesGalleryReduc.GALLERY_CAROUSEL_STEP,
   payload: number
}
export interface GalleryCaroulesOpen {
   type: TypesGalleryReduc.GALLERY_CAROUSEL_OPEN,
   payload: number
}
export interface GalleryCaroulesOut {
   type: TypesGalleryReduc.GALLERY_CAROUSEL_OUT,
}

export type ActionGalleryCarousel = GalleryCarouselChange | GalleryCaroulesResponsive | GalleryCaroulesOut
   | GalleryCaroulesStep | GalleryCaroulesCounter | GalleryCaroulesOpen