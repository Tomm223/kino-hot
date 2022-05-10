
import { FC } from 'react'
import style from './index.module.scss'
const styles = style as any

interface logoProps {
   func: () => void
}

export const Logo: FC<logoProps> = ({ func }) => {


   return (
      <div onClick={func} className={styles.logo}>
         <h1 className={styles.logo_title}>KiNo-Hot</h1>
      </div>
   )
}