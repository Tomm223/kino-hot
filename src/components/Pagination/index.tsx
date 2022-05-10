
import React, { FC, useEffect, useState } from "react";


import style from './index.module.scss'
import { PaginationSelect } from "./PaginationSelect";
const styles = style as any

interface PaginationProps {
   pageCount: number,
   page: number,
   setSearchParams: (page: number | string) => void
}

const Pagination: FC<PaginationProps> = ({ page, pageCount, setSearchParams }) => {
   const [pagesArray, setPagesArray] = useState<number[]>([])

   useEffect(() => {
      if (page >= 7 && pagesArray.length) {
         const arr = []
         for (var i = page - 4; i <= page + 4; i++) {
            if (i < pageCount) {
               arr.push(i)
            }
         }
         setPagesArray(arr)
      }
      else if (page < 7) {
         const arr = []
         for (var i = 1; i <= pageCount; i++) {
            if (i <= 10) {
               arr.push(i)
            }
         }
         setPagesArray(arr)
      }
   }, [page, pageCount])





   return (
      <nav aria-label="page" style={{ display: 'flex', justifyContent: 'center' }}>
         <ul className="pagination pagination-sm" >
            {
               pagesArray.map((item, i) => {


                  if (item === page) {
                     return (
                        <li key={item}
                           className="page-item active"
                           aria-current="page">
                           <p className="page-link"
                              style={{ padding: '15px 20px' }}
                           >{item}</p>
                        </li>
                     )
                  }
                  else {
                     return (
                        <li key={item}
                           style={{ cursor: 'pointer' }}
                           onClick={() => setSearchParams(item)}
                           className={"page-item"}>
                           <p className="page-link"
                              style={{ padding: ' 15px 20px' }}
                           >{item}</p>
                        </li>
                     )
                  }

               })
            }
            <>
               <li key={`...${Date.now()}`}
                  className={"page-item"}>
                  <p className="page-link"
                     style={{ padding: ' 15px 20px' }}
                  >...</p>
               </li>
               <li key={pageCount}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSearchParams(pageCount)}
                  className={"page-item"}>
                  <p className="page-link"
                     style={{ padding: ' 15px 20px' }}
                  >{pageCount}</p>
               </li>
               <li key={`поиск${Date.now()}`}
                  className={`${styles.li} page-item`}>
                  <PaginationSelect page={page}
                     onSubmit={
                        (value) => {
                           value <= pageCount && value > 0 &&
                              setSearchParams(value)
                        }} />
               </li>
            </>
         </ul>
      </nav>
   )
}

export default Pagination


/*

 else if (i === 9) {
                     return (
                        <>
                           <li key={item}
                              className={"page-item"}>
                              <p className="page-link"
                                 style={{ padding: ' 15px 20px' }}
                              >...</p>
                           </li>
                           <li key={pageCount}
                              style={{ cursor: 'pointer' }}
                              onClick={() => setSearchParams(pageCount)}
                              className={"page-item"}>
                              <p className="page-link"
                                 style={{ padding: ' 15px 20px' }}
                              >{pagesArray.length + 1}</p>
                           </li>
                           <li key={`поиск${Date.now()}`}
                              className={`${styles.li} page-item`}>
                              <form className={`${styles.form} page-link`}
                                 onSubmit={() => alert('СДЕЛАТЬ ПОИСК')}>
                                 <input className={styles.input} type="text" />
                              </form>
                           </li>
                        </>
                     )
                  }

*/