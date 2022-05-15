import React, { FC } from "react";

import style from './index.module.scss'
const styles = style as any

interface ImgsItemProps {
   width: number
   src: string,
   onClick: (stepID: number) => void,
   posArr: number
}

const FilmImgItem: FC<ImgsItemProps> = ({ width, src, onClick, posArr }) => {

   return (
      <div onClick={() => onClick(posArr)} className={styles.div}>
         <img style={{ width: `${width}px`, height: `${width / 1.78}px` }} src={src} />
      </div>
   )
}

export default FilmImgItem