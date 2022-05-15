import { FC } from "react"
import { useMediaQuery } from "react-responsive"
import { useAction } from "../../../hook/useAction"
import { useResponsive } from "../../../hook/useResponsive"
import { useTypeSelector } from "../../../hook/useTypeSelector"
import Carousel from "../../Carousels"
import FilmItem from "../../FilmItem"
import { AlertError } from "../../UI/Alert"

import style from './index.module.scss'
const styles = style as any


const FilmSimilar: FC = () => {
   const similar = useTypeSelector(state => state.filmsSimilar.films)
   const alert = useTypeSelector(state => state.filmsSimilar.alert)
   const total = useTypeSelector(state => state.filmsSimilar.total)
   const step = useTypeSelector(state => state.similarCarousel.step)
   const maxCount = useTypeSelector(state => state.similarCarousel.maxCount)
   const stepCount = useTypeSelector(state => state.similarCarousel.stepCount)
   const window = useTypeSelector(state => state.similarCarousel.windowSimilar)
   const offset = useTypeSelector(state => state.similarCarousel.offsetRight)

   const {
      ActionSimilarCarouselInit,
      ActionSimilarResponsive,
      ActionSimialarCounter,
      ActionSimilarStep } = useAction()

   const { SimilarCarousel_Func } = useResponsive()

   return (
      <>
         <AlertError alert={alert} />
         {maxCount ? <h3 className={styles.titleSimilar}>Смотрите также:</h3> : <></>}
         <Carousel
            total={total}
            carousel={{
               step,
               stepCount,
               maxCount,
               height: step * 1.78,
               window
            }}
            action={{
               init: ActionSimilarCarouselInit,
               count: ActionSimialarCounter,
               steped: ActionSimilarStep,
               size: ActionSimilarResponsive
            }}
            ListNode={
               <div className="carousel-list"
                  style={{ right: `${offset}px` }}
               >
                  {
                     similar.map((item) => {

                        return (
                           <FilmItem key={item.filmId} film={item}
                              sizeBlock={{ padding: `0 5px` }}
                              sizeImg={{ width: `${step - 10}px`, height: `${(step - 10) * 1.5}px` }}
                           />
                        )
                     })
                  }
               </div>
            }
            sizingAdaptive={{
               buildWindowWidth: SimilarCarousel_Func.buildWidowWidth,
               buildStepWidth: SimilarCarousel_Func.buildStepWidth
            }}
            btn={{
               imgBtn: '/img/icons8-back-to-80.png',
               sizeBtn: {
                  width: step / 2,
                  height: step,
                  offset: -step / 2,
                  rotateImgLeft: false,
                  opacityHolder: 0.5

               }
            }}
         />
      </>
   )
}

export default FilmSimilar

