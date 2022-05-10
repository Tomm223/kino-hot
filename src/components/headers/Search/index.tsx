
import React, { FC, useState } from 'react'
import style from './index.module.scss'
const styles = style as any

interface SearchProps {
   Change: (search: string) => void
}

export const Search: FC<SearchProps> = ({ Change }) => {

   const [value, setValue] = useState<string>('')
   function handle(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      Change(value)
      setValue('')
   }
   return (
      <form onSubmit={handle} className={styles.form}>
         <input className={styles.input} type="text" placeholder='Поиск'
            value={value} onChange={(e) => setValue(e.target.value)}
         />
         <button className={styles.btn} type='submit'>Поиск</button>
      </form>
   )
}