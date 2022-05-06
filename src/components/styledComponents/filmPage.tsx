import { FC } from "react";
import styled from "styled-components";
import { useTypeSelector } from "../../hook/useTypeSelector";


/*
background: url(image.jpg); 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
*/
const StyledFilmBackground = styled.div`
position:fixed;
top 0;
left:50%;
transform: translate(-50%,0%);
padding-top: 1rem;
background-color: rgba(#000000, 0.4);
filter: blur(20px); 
z-index:-1;
width:80vw;
height:100vh;

`
interface FilmPageProps {

}
export const FilmBackground: FC<FilmPageProps> = (props) => {
   const film = useTypeSelector(state => state.film.film)
   return (
      <StyledFilmBackground  {...props}>
         <img style={{ width: `100%`, height: `100%` }} src={film?.posterUrlPreview} alt="" />
      </StyledFilmBackground >
   )
}