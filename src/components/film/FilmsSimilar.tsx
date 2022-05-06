import React, { FC, useEffect } from "react";
import { useAction } from "../../hook/useAction";
import { useResponsive } from "../../hook/useResponsive";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { SimialarList, SimilarLeftSide, SimilarOverFlow, SimilarRightSide } from "../styledComponents/filmSimilar";
import FilmSimilarItem from "./FilmSimilarItem";

interface FilmsSimilarProps {
}

const FilmsSimilar: FC<FilmsSimilarProps> = () => {

   const similar = useTypeSelector(state => state.filmsSimilar.films)
   const total = useTypeSelector(state => state.filmsSimilar.total)
   const step = useTypeSelector(state => state.similarCarousel.step)
   const maxCount = useTypeSelector(state => state.similarCarousel.maxCount)
   const stepCount = useTypeSelector(state => state.similarCarousel.stepCount)
   const { minLabTop, maxLabTop, minTablet, maxTablet, maxMonitor, minFon, minMonitor, SimilarCarousel_Func } = useResponsive()
   const { ActionSimilarCarouselInit, ActionSimilarResponsive, ActionSimialarCounter, ActionSimilarStep } = useAction()

   useEffect(() => {
      //step addListener
      ActionSimilarStep(stepCount, step)
   }, [stepCount])

   useEffect(() => {
      //init 
      ActionSimilarCarouselInit(
         SimilarCarousel_Func.buildSimalarStepWidth(),
         SimilarCarousel_Func.buildSimalarWidowWidth(),
         total)
   }, [total])
   useEffect(() => {
      //responsive adaptive 
      ActionSimilarResponsive(
         SimilarCarousel_Func.buildSimalarStepWidth(),
         SimilarCarousel_Func.buildSimalarWidowWidth())
   }, [minLabTop, maxLabTop, minTablet, maxTablet, maxMonitor, minFon, minMonitor])

   return (
      <div style={{ display: `${maxCount ? '' : 'none'}` }}>
         <h3 className="film__similar-title">Смотрите также:</h3>
         <div className="film__similar">
            <SimilarOverFlow>
               <SimialarList>
                  {similar.map((film) => {
                     return (
                        <FilmSimilarItem film={film} />
                     )
                  })}
               </SimialarList>
            </SimilarOverFlow>
            <SimilarLeftSide onClick={() => ActionSimialarCounter(true, stepCount, maxCount)}>
               <img src="/img/icons8-back-to-80.png" alt="" />
            </SimilarLeftSide>
            <SimilarRightSide onClick={() => ActionSimialarCounter(false, stepCount, maxCount)}>
               <img src="/img/icons8-back-to-80.png" alt="" />
            </SimilarRightSide>
         </div>
      </div>
   )
}

export default FilmsSimilar