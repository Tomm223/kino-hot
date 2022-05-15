
import React, { FC, useEffect, useState } from "react";
import { useResponsive } from "../../hook/useResponsive";


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
   const { PaginationResponsive_Func, mediaSizeArr } = useResponsive()
   const [pageSide, setPageSide] = useState(3)
   const [pagesAmount, setPageAmount] = useState(7)
   useEffect(() => {
      const side = PaginationResponsive_Func.buildSidePages()
      setPageAmount(side * 2 + 1)
      setPageSide(side)
   }, [...mediaSizeArr])

   useEffect(() => {
      if (page > pagesArray.length / 2 || page > pageSide && pagesArray.length) {
         const arr = []
         for (var i = page - pageSide; i <= page + pageSide; i++) {
            if (i < pageCount) {
               arr.push(i)
            }
         }
         setPagesArray(arr)
      }
      else if (page <= pagesArray.length / 2) {
         const arr = []
         for (var i = 1; i <= pageCount; i++) {
            if (i <= pagesAmount) {
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


