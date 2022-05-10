import { loadavg } from "os";
import React, { FC } from "react";

import style from './index.module.scss'
const styles = style as any

interface LoadingFetchProps {
   loading: boolean
   center?: boolean
}

export const LoadingDefault: FC<LoadingFetchProps> = ({ loading, center }) => {
   if (loading) {
      return (
         <div className={center ? styles.center : ''}>
            <div className="spinner-border " role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      )
   }
   return (
      <></>
   )
}