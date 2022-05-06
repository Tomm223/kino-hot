import React, { FC, ReactNode, useState } from "react";
import styled from 'styled-components'
import { useResponsive } from "../../hook/useResponsive";



const cardWH = '2/3'


const StyledFilmCard = styled.div`
width: 240px;
height:360px;
position: relative;
margin-bottom: 1rem;

`
interface PropsCard {
   children: ReactNode[]
   onClick: () => void
   responsive?: boolean[]
}

const FilmCard: FC<PropsCard> = (props) => {

   return (
      <StyledFilmCard onClick={props.onClick} >
         {props.children}
      </StyledFilmCard>
   )
}

export default FilmCard

