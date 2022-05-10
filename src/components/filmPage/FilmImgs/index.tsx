import { FC } from "react"
import { useMediaQuery } from "react-responsive"
import { useAction } from "../../../hook/useAction"
import { useResponsive } from "../../../hook/useResponsive"
import { useTypeSelector } from "../../../hook/useTypeSelector"
import Carousel from "../../Carousels"
import FilmImgItem from "../FilmImgItem"



const FilmImgs: FC = () => {
   //imgsState const
   const imgs = useTypeSelector(state => state.filmImgs.imgs)
   const totalImg = useTypeSelector(state => state.filmImgs.total)
   //CarouselState const
   const step = useTypeSelector(state => state.imgsCarousel.step)
   const maxCount = useTypeSelector(state => state.imgsCarousel.maxCount)
   const stepCount = useTypeSelector(state => state.imgsCarousel.stepCount)
   const window = useTypeSelector(state => state.imgsCarousel.windowImgs)
   const offset = useTypeSelector(state => state.imgsCarousel.offsetLeft)
   const {
      ActionImgsCarouselInit,
      ActionImgscarouselStep,
      ActionImgsCarouselCounter,
      ActionImgsCarouselResponsive } = useAction()

   const { ImgCarousel_Func } = useResponsive()

   return (
      <>
         <Carousel
            total={totalImg}
            ListNode={
               <div className="carousel-list"
                  style={{ right: `${offset}px` }}
               >
                  {
                     imgs.map((item) => {

                        return (
                           <FilmImgItem key={item.previewUrl} width={step - 6} src={item.previewUrl} />
                        )
                     })
                  }
               </div>
            }
            carousel={{
               step,
               height: step / 1.78,
               maxCount,
               stepCount,
               window
            }}
            action={{
               init: ActionImgsCarouselInit,
               count: ActionImgsCarouselCounter,
               steped: ActionImgscarouselStep,
               size: ActionImgsCarouselResponsive,
            }}
            sizingAdaptive={{
               buildWindowWidth: ImgCarousel_Func.buildWidowWidth,
               buildStepWidth: ImgCarousel_Func.buildStepWidth
            }}
            btn={{
               imgBtn: '/img/icons8-arrow-100.png',
               sizeBtn: {
                  width: step - 6,
                  height: step / 1.78,
                  offset: -step,
                  rotateImgLeft: true,
                  color: '#8E8A7E',
                  colorHolder: '#4A4842'
               }
            }}
         />
      </>
   )
}

export default FilmImgs