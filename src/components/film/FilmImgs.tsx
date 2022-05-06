import React, { FC, useEffect, useState } from "react";
import { useAction } from "../../hook/useAction";
import { useResponsive } from "../../hook/useResponsive";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { FilmImgsList, FimlImgsOverFlow, ImgCarouselLeft, ImgsCarouselRight } from "../styledComponents/filmImgs";

const FilmImgs: FC = () => {
   const imgs = useTypeSelector(state => state.filmImgs.imgs)
   const totalImg = useTypeSelector(state => state.filmImgs.total)
   const totalPage = useTypeSelector(state => state.filmImgs.totalPages)
   const step = useTypeSelector(state => state.imgsCarousel.step)
   const maxCount = useTypeSelector(state => state.imgsCarousel.maxCount)
   const stepCount = useTypeSelector(state => state.imgsCarousel.stepCount)
   const { minLabTop, maxLabTop, minTablet, maxTablet, maxMonitor, minFon, minMonitor, ImgCarousel_Func } = useResponsive()
   const { ActionImgsCarouselInit, ActionImgscarouselStep, ActionImgsCarouselCounter, ActionImgsCarouselResponsive } = useAction()
   const [total, setTotal] = useState<number>(0)

   useEffect(() => {
      //step addListener
      ActionImgscarouselStep(stepCount, step)
   }, [stepCount])

   useEffect(() => {
      //init 
      ActionImgsCarouselInit(
         stepCount,
         ImgCarousel_Func.buildStepImgsWidth(),
         ImgCarousel_Func.buildWidowImgsWidth(),
         total)
   }, [total])
   useEffect(() => {
      ActionImgsCarouselResponsive(
         ImgCarousel_Func.buildStepImgsWidth(),
         ImgCarousel_Func.buildWidowImgsWidth())
   }, [minLabTop, maxLabTop, minTablet, maxTablet, maxMonitor, minFon, minMonitor])

   useEffect(() => {
      if (totalImg && totalPage) {
         setTotal(totalPage > 1 ? 20 : totalImg)
      }
   }, [totalPage, totalImg])



   return (
      <FimlImgsOverFlow >
         <FilmImgsList>
            {imgs.map((img) => {
               return <div className="film__imgs-block">
                  <img style={{ width: `${step - 6}px`, height: `${step / 1.78}px` }} className="film__imgs-item" src={img.previewUrl} />
               </div>
            })}
         </FilmImgsList>
         <ImgCarouselLeft onClick={() => ActionImgsCarouselCounter(true, stepCount, maxCount)}>
            <img src="/img/icons8-arrow-100.png" alt="" />
         </ImgCarouselLeft>
         <ImgsCarouselRight onClick={() => ActionImgsCarouselCounter(false, stepCount, maxCount)} >
            <img src="/img/icons8-arrow-100.png" alt="" />
         </ImgsCarouselRight>
      </FimlImgsOverFlow>
   )
}

export default FilmImgs


/*

<div onClick={() => ActionImgsCarouselCounter(true, stepCount, maxCount)}
            style={{ width: `${step}px`, height: `${step / 1.78}px` }}
            className={stepCount === -1 ? "film__imgs-left active" : 'film__imgs-left'} >
            <img src="/img/icons8-arrow-100.png" alt="" />
         </div>
         <div onClick={() => ActionImgsCarouselCounter(false, stepCount, maxCount)}
            className={maxCount === stepCount ? "film__imgs-right active" : 'film__imgs-right'}
            style={{
               width: `${step}px`,
               height: `${step / 1.78}px`,
            }} >
            <img src="/img/icons8-arrow-100.png" alt="" />
         </div>

*/