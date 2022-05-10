import style from './index.module.scss'
const styles = style as any


export const LoadingFilmList = () => {

   return (
      <div className={styles.holder} aria-hidden="true">
         <div className={`placeholder-glow`}>
            <span className={` ${styles.img}  placeholder col-12 placeholder-lg`}></span>
         </div>
         <div className={` placeholder-glow`}>
            <span className={`${styles.title} placeholder col-12 placeholder-lg`}></span>
            <div className={`${styles.text} placeholder col-12 placeholder-sm`}></div>
         </div>
      </div>
   )
}

<img src="..." className={`${styles.img} placeholder`} alt="..." />