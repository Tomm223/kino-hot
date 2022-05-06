import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useTypeSelector } from "../../hook/useTypeSelector";




const StyledFilmImgsIverFlow = styled.div`

width: 1248px;
height: 103px;
display: flex;
justify-content: end;
align-items: center;
margin: 0 auto;
margin-bottom: 1rem;
position: relative;
overflow: hidden;

`
interface PropsImgsOverFlow {
   children: React.ReactNode[],

}
export const FimlImgsOverFlow = (props: PropsImgsOverFlow) => {
   const windowImgs = useTypeSelector(state => state.imgsCarousel.windowImgs)
   const maxCount = useTypeSelector(state => state.imgsCarousel.maxCount)

   return (
      <StyledFilmImgsIverFlow style={{ width: `${windowImgs}px`, display: `${maxCount === 999 ? 'none' : ''}` }} {...props}>
         {props.children}
      </StyledFilmImgsIverFlow>
   )
}

const StyledFilmImgList = styled.ul`

width: 100%;
position: absolute;
top: 0;
display: flex;
justify-content: start;
transition: right .6s;
`

interface PropsFilmList {
   children: React.ReactNode[]
}

export const FilmImgsList: FC<PropsFilmList> = (props) => {
   const offsetLeft = useTypeSelector(state => state.imgsCarousel.offsetLeft)
   return (
      <StyledFilmImgList style={{ right: `${offsetLeft}px` }}>
         {props.children}
      </StyledFilmImgList>
   )
}

const StyledBtnSides = styled.div`

cursor: pointer;
position: absolute;
top: 0;
width: 156px;
height: 103px;
display: flex;
justify-content: center;
align-items: center;
background-color: #8E8A7E;

`
const StyledImgRight = styled(StyledBtnSides)`

right: 0px;

`
const StyledImgLeft = styled(StyledBtnSides)`

left: 0px;
transform: rotate(180deg);

`

interface imgRight {
   children: React.ReactNode
   onClick: () => void
}
export const ImgsCarouselRight: FC<imgRight> = (props) => {
   const maxCount = useTypeSelector(state => state.imgsCarousel.maxCount)
   const stepCount = useTypeSelector(state => state.imgsCarousel.stepCount)
   const step = useTypeSelector(state => state.imgsCarousel.step)
   const [active, setActive] = useState<any>({
      width: `${step}px`,
      height: `${step / 1.78}px`,
   })
   useEffect(() => {
      maxCount === stepCount
         ?
         setActive({
            background: `#4A4842`,
            cursor: `auto`,
            width: `${step}px`,
            height: `${step / 1.78}px`
         })
         :
         setActive({
            width: `${step}px`,
            height: `${step / 1.78}px`
         })

   }, [maxCount])
   return (
      <StyledImgRight style={active} {...props}>
         {props.children}
      </StyledImgRight>
   )
}


interface ImgCarouselLeftProps {
   children: React.ReactNode
   onClick: () => void
}
export const ImgCarouselLeft: FC<ImgCarouselLeftProps> = (props) => {
   const stepCount = useTypeSelector(state => state.imgsCarousel.stepCount)
   const step = useTypeSelector(state => state.imgsCarousel.step)
   const [active, setActive] = useState<any>({
      width: `${step}px`,
      height: `${step / 1.76}px`,
   })
   useEffect(() => {
      stepCount === -1
         ?
         setActive({
            background: `#4A4842`,
            cursor: `auto`,
            width: `${step}px`,
            height: `${step / 1.76}px`
         })
         :
         setActive({
            width: `${step}px`,
            height: `${step / 1.76}px`
         })


   }, [stepCount])
   return (
      <StyledImgLeft style={active} {...props}>
         {props.children}
      </StyledImgLeft>
   )
}




