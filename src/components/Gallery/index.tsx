import React, { FC, useEffect, useRef } from "react";
import { useAction } from "../../hook/useAction";
import { useResponsive } from "../../hook/useResponsive";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { FilmImg } from "../../types/fetch";
import Carousel from "../Carousels";
import style from './index.module.scss'
const styles = style as any

interface GalleryProps {
   imgs: FilmImg[],
   stepId: number,
   total: number
}

const Gallery: FC<GalleryProps> = ({ imgs, stepId, total }) => {

   const show = useTypeSelector(state => state.gallery.show)
   const step = useTypeSelector(state => state.gallery.step)
   const stepCount = useTypeSelector(state => state.gallery.stepCount)
   const maxCount = useTypeSelector(state => state.gallery.maxCount)
   const offsetLeft = useTypeSelector(state => state.gallery.offsetLeft)
   const window = useTypeSelector(state => state.gallery.window)
   let height = (step - 10) / 1.5
   const { ActionGalleryOut, ActionGalleryCarouselSelectStepCount, ActionGalleryCarouselInit, ActionGalleryCounter, ActionGalleryStep, ActionGalleryResponsive } = useAction()
   const { GalleryResponsive_Func } = useResponsive()
   useEffect(() => {
      ActionGalleryCarouselSelectStepCount(stepId)
   }, [])
   const back = useRef<HTMLDivElement>(null)
   const closeDIV = useRef<HTMLDivElement>(null)
   const closeIMG = useRef<HTMLImageElement>(null)
   function handleOut(e: React.MouseEvent) {
      console.log(e);

      if (e.target === back.current || e.target === closeDIV.current) {
         ActionGalleryOut()
      }

   }

   return (
      <div ref={back} style={{ display: show ? 'flex' : 'none' }} onClick={handleOut} className={styles.back}>
         <div className={styles.block}>
            <div className={styles.closeDiv}>
               <img onClick={ActionGalleryOut} className={styles.closeImg} src="./img/close.png" alt="" />
            </div>
            <Carousel
               total={total}
               carousel={{
                  height,
                  step,
                  maxCount,
                  stepCount,
                  window
               }}
               ListNode={
                  <div className="carousel-list" style={{ right: `${offsetLeft}px` }}>
                     {
                        imgs.map((item, i) => {
                           return <img key={i} src={item.imageUrl} style={{ width: `${step - 10}px`, height: `${height}px`, margin: `0 5px` }} />
                        })
                     }
                  </div>
               }
               action={{
                  init: ActionGalleryCarouselInit,
                  count: ActionGalleryCounter,
                  size: ActionGalleryResponsive,
                  steped: ActionGalleryStep,
               }}
               sizingAdaptive={{
                  buildWindowWidth: function () { return 1 },
                  buildStepWidth: GalleryResponsive_Func.buildStep
               }}
               btn={{
                  imgBtn: '/img/icons8-back-to-80.png',
                  sizeBtn: {
                     width: step / 4,
                     height: step / 2,
                     offset: -step / 5,
                     rotateImgLeft: false,
                     opacityHolder: 0.5

                  }
               }}
            />
         </div>

      </div>

   )
}

export default Gallery


/*

<>
         <Carousel

            carousel={{
               height,
               step,
               maxCount,
               stepCount,
               window
            }}
            ListNode={
               <>

                  <div style={{ right: `${offsetLeft}px` }}>
                     {
                        imgs.map((item) => {
                           return <></>
                        })
                     }
                  </div>

               </>
            }


         />
      </>


*/