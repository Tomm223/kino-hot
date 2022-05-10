import React, { FC, useEffect, useState } from "react";
import { useResponsive } from "../../hook/useResponsive";
import { SimilarCarouselCounter, SimilarCarouselInit, SimilarCarouselResponsive, SimilarCarouselStep } from "../../types/redux/similarCarousel";
import { ImgsCaroulesCounter, ImgsCaroulesResponsive, ImgsCaroulesStep, ImgsCarouselChange } from "../../types/redux/ImgsCarousel";

import style from './index.module.scss'
import { useMediaQuery } from "react-responsive";
const styles = style as any

interface FilmsSimilarProps {
   total: number,
   ListNode: React.ReactNode,
   carousel: {
      step: number,
      height: number,
      stepCount: number,
      maxCount: number | null,
      window: number
   }
   action: {
      init: (step: number, amountImgs: number, total: number) => SimilarCarouselInit | ImgsCarouselChange,
      steped: (count: number, step: number) => SimilarCarouselStep | ImgsCaroulesStep,
      count: (left: boolean, count: number, maxCount: number) => SimilarCarouselCounter | ImgsCaroulesCounter,
      size: (step: number, stepCount: number) => SimilarCarouselResponsive | ImgsCaroulesResponsive
   },
   sizingAdaptive: {
      buildWindowWidth: () => number
      buildStepWidth: () => number
   },
   btn: {
      imgBtn: string,
      sizeBtn: {
         width: number,
         height: number,
         offset: number,
         rotateImgLeft: boolean,
         color?: string,
         colorHolder?: string,
         opacityHolder?: number
      }
   }
}

const Carousel: FC<FilmsSimilarProps> = ({ total, ListNode, carousel, action, sizingAdaptive, btn }) => {

   const { step, stepCount, maxCount, window, height } = carousel
   const { init, count, steped, size } = action
   const { buildWindowWidth, buildStepWidth } = sizingAdaptive
   const { imgBtn, sizeBtn } = btn
   const { mediaSizeArr } = useResponsive()
   const maxTablet = useMediaQuery({ query: '(max-width: 768px)' })


   useEffect(() => {
      //step addListener
      steped(stepCount, step)
   }, [stepCount])

   useEffect(() => {
      //init 
      init(
         buildStepWidth(),
         buildWindowWidth(),
         total)
   }, [total])

   useEffect(() => {
      //adaptive
      size(
         buildStepWidth(),
         buildWindowWidth())
   }, [...mediaSizeArr])

   return (
      <div className={styles.spin_block} style={{ display: `${maxCount ? '' : 'none'}` }}>
         <div className={styles.spin}
            style={{
               width: maxTablet ? '95vw' : `${window}px`,
               height: `${height}px`
            }}>
            <div className={styles.spin_container}>
               {ListNode}
            </div>
            {
               !maxTablet &&
               <>
                  <div className={styles.spin_left}
                     onClick={() => maxCount && count(true, stepCount, maxCount)}
                     style={{
                        width: `${sizeBtn.width}px`,
                        height: `${sizeBtn.height}px`,
                        left: `${sizeBtn.offset}px`,
                        background: stepCount === 0 ? `${sizeBtn.colorHolder}` : `${sizeBtn.color}`,
                        opacity: stepCount === 0 ? `${sizeBtn.opacityHolder ? sizeBtn.opacityHolder : 1}` : `1`,
                        cursor: stepCount === 0 ? 'auto' : 'pointer'

                     }}
                  >
                     <img src={imgBtn} alt=""
                        style={{
                           transform: sizeBtn.rotateImgLeft ? `rotate(180deg)` : ''
                        }}
                     />
                  </div>
                  <div className={styles.spin_right}
                     onClick={() => maxCount && count(false, stepCount, maxCount)}
                     style={{
                        width: `${sizeBtn.width}px`,
                        height: `${sizeBtn.height}px`,
                        right: `${sizeBtn.offset}px`,
                        background: maxCount === stepCount ? `${sizeBtn.colorHolder}` : `${sizeBtn.color}`,
                        opacity: maxCount === stepCount ? `${sizeBtn.opacityHolder ? sizeBtn.opacityHolder : 1}` : `1`,
                        cursor: maxCount === stepCount ? 'auto' : 'pointer'
                     }}
                  >
                     <img src={imgBtn} alt=""
                        style={{
                           transform: !sizeBtn.rotateImgLeft ? `rotate(180deg)` : ''
                        }}
                     />
                  </div>
               </>
            }
         </div>
      </div>
   )
}

export default Carousel