import React, { FC, useEffect, useState } from "react";
import { useAction } from "../../hook/useAction";
import { useTypeSelector } from "../../hook/useTypeSelector";

const PaginationFilms: FC = () => {
   const PageCount = useTypeSelector(state => state.films.pageCount)
   const page = useTypeSelector(state => state.films.page)
   const { FilmsListPageChange } = useAction()
   const [pagesArray, setPagesArray] = useState<number[]>([])

   useEffect(() => {
      const CreateArray = () => {
         const arr: number[] = []
         for (var i = 1; i <= PageCount; i++) {
            arr.push(i)
         }
         setPagesArray(arr)
      }
      CreateArray()
   }, [PageCount])

   return (
      <nav aria-label="page">
         <ul className="pagination pagination-sm">
            {
               pagesArray.map((item) => {
                  if (item === page) {
                     return (
                        <li key={item}
                           className="page-item active"
                           aria-current="page">
                           <p className="page-link">{item}</p>
                        </li>
                     )
                  }
                  else {
                     return (
                        <li key={item}
                           style={{ cursor: 'pointer' }}
                           onClick={() => FilmsListPageChange(item)}
                           className="page-item">
                           <p className="page-link">{item}</p>
                        </li>
                     )
                  }
               })
            }
         </ul>
      </nav>
   )
}

export default PaginationFilms