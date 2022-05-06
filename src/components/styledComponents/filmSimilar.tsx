import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { useTypeSelector } from "../../hook/useTypeSelector"


const paddingInstan = 6


const StyledSimilarOverflow = styled.div`

margin: 0 auto;
width: 1008px;
height: 100%;
overflow: hidden;
display: flex;
align-items: center;
position: relative;

`

interface SimilarOverflowProps {
   children: React.ReactNode
}

export const SimilarOverFlow: FC<SimilarOverflowProps> = (props) => {
   const window = useTypeSelector(state => state.similarCarousel.windowSimilar)
   const step = useTypeSelector(state => state.similarCarousel.step)
   const [height, setHeight] = useState<number>(0)
   useEffect(() => {
      setHeight(step * 1.5)
   }, [step])
   return (
      <StyledSimilarOverflow style={{ width: `${window}px`, height: `${height}px` }} {...props}>{props.children}</StyledSimilarOverflow>
   )
}


const StyledSimilarList = styled.ul`

position: absolute;
top: 0;
display: flex;
transition: left .6s

`
interface SimilarListProps {
   children: React.ReactNode
}
export const SimialarList: FC<SimilarListProps> = (props) => {
   const offset = useTypeSelector(state => state.similarCarousel.offsetRight)
   return (
      <StyledSimilarList style={{ left: `${-offset}px` }} {...props}>
         {props.children}
      </StyledSimilarList>
   )
}



const StyledFilmSimilarCard = styled.div`

height: 100%;
position: relative;

`
interface SimilarCardProps {
   children: React.ReactNode[],
   onClick: () => void
}
export const SimilarCard: FC<SimilarCardProps> = (props) => {
   const step = useTypeSelector(state => state.similarCarousel.step)

   return (
      <StyledFilmSimilarCard
         style={{
            width: `${step}px`,
            padding: `0px ${paddingInstan}px`
         }} {...props}>{props.children}</StyledFilmSimilarCard>
   )
}


const StyledSimilarCardImgBlock = styled.div`

position: relative;
width: 100%;

`
interface SimilarCardImgBlock {
   children: React.ReactNode[]
}
export const SmiliarCardImgBlock: FC<SimilarCardImgBlock> = (props) => {
   const step = useTypeSelector(state => state.similarCarousel.step)
   const [height, setHeight] = useState<number>(0)
   useEffect(() => {
      setHeight((step - paddingInstan) * 1.5)
   }, [step])
   return (
      <StyledSimilarCardImgBlock style={{ width: `${step - paddingInstan}px`, height: `${height}px` }} {...props}>{props.children}</StyledSimilarCardImgBlock>
   )
}



const StyledSimilarSides = styled.div`

position: absolute;
top: 50%;
width: 70px;
height: auto;
cursor:pointer;
img {
   width: 100%;
   height: auto;
}

`
const StyledSimilarLeftSide = styled(StyledSimilarSides)`

left: 10px;
transform: translate(0%, -50%);

`

interface SimialarLeftSide {
   children: React.ReactNode
   onClick: () => void
}
export const SimilarLeftSide: FC<SimialarLeftSide> = (props) => {
   const stepCount = useTypeSelector(state => state.similarCarousel.stepCount)
   return (
      <StyledSimilarLeftSide style={{ opacity: stepCount === 0 ? '0' : '1' }} {...props}>
         {props.children}
      </StyledSimilarLeftSide>
   )
}



const StyledSimilarRightSide = styled(StyledSimilarSides)`

right: 0px;
transform: translate(0%, -50%) rotate(180deg);

`

interface SimilarRightProps {
   children: React.ReactNode
   onClick: () => void
}

export const SimilarRightSide: FC<SimilarRightProps> = (props) => {
   const maxCount = useTypeSelector(state => state.similarCarousel.maxCount)
   const stepCount = useTypeSelector(state => state.similarCarousel.stepCount)
   return (
      <StyledSimilarRightSide style={{ opacity: maxCount === stepCount ? '0' : '1' }} {...props}>
         {props.children}
      </StyledSimilarRightSide>
   )
}


// НЕ НУЖНЫЕ КОМПНЕНТЫ
/*
const StyledSimilarImgDarken = styled.div`

position: absolute;
left: 0;
top: 0;
right: 0;
bottom: 0;
z-index: 1;
width: 100%;
height: 100%;
background-color: rgba($color: #000000, $alpha: 0.0);
cursor: pointer;
`
interface SimilarDarken {

}
export const SimilarCardDarken: FC<SimilarDarken> = (props) => {
   const step = useTypeSelector(state => state.SimilarCarousel.step)
   return (
      <StyledSimilarImgDarken style={{ width: `${step}px` }}  {...props}></StyledSimilarImgDarken>
   )
}
//style={{ width: `${step}px` }}

const StyledSimilarCardImg = styled.img`

z-index: 0;
      width: 100%;
      height: 100%;

`

interface SimilarImgProps {
   src: string,
   alt: string
}
export const SimilarCardImg: FC<SimilarImgProps> = (props) => {
   const step = useTypeSelector(state => state.SimilarCarousel.step)
   const [height, setHeight] = useState<number>(0)
   useEffect(() => {
      setHeight(step * 1.5)
   }, [step])
   return (
      <StyledSimilarCardImg style={{ width: `${step}px`, height: `${height}px` }}
         {...props}
      ></StyledSimilarCardImg>
   )
}*/