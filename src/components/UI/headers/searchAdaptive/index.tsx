import { FC } from 'react'
import style from './index.module.scss'
const styles = style as any

interface SerchProps {

}

const SearchAdaptive: FC<SerchProps> = () => {

   return (
      <div className={styles.block}>
         <img src="./img/icons8-google-web-search-50.png" alt="" />
      </div>
   )
}

export default SearchAdaptive