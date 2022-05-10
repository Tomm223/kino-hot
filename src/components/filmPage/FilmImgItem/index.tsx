import React, { FC } from "react";

import style from './index.module.scss'
const styles = style as any

interface ImgsItemProps {
   width: number
   src: string
}

const FilmImgItem: FC<ImgsItemProps> = ({ width, src }) => {

   return (
      <div className={styles.div}>
         <img style={{ width: `${width}px`, height: `${width / 1.78}px` }} src={src} />
      </div>
   )
}

export default FilmImgItem