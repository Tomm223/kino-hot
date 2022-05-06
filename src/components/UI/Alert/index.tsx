import React, { FC } from "react";

interface AlertErrorProps {
   alert: null | string
}

export const AlertError: FC<AlertErrorProps> = ({ alert }) => {
   if (alert) {
      return (
         <div className="alert alert-danger" role="alert">
            {alert}
         </div>
      )
   }
   return (
      <></>
   )



}