import React, { FC, useState } from 'react'
import style from './index.module.scss'
const styles = style as any

interface PaginationSelectProps {
   onSubmit: (value: number | string) => void,
   page: number
}

export const PaginationSelect: FC<PaginationSelectProps> = ({ onSubmit, page }) => {

   const [value, setValue] = useState<number | string>(page)

   return (
      <form className={`${styles.form} page-link`}>
         <input className={styles.input} type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent) => {
               if (e.code === 'Enter') {
                  e.preventDefault()
                  onSubmit(value)
               }
            }}
         />
      </form>
   )
}