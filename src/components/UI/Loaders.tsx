import { loadavg } from "os";
import React, { FC } from "react";

interface LoadingFetchProps {
   loading: boolean
}

export const LoadingFetch: FC<LoadingFetchProps> = ({ loading }) => {
   if (loading) {
      return (
         <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      )
   }
   return (
      <></>
   )
}