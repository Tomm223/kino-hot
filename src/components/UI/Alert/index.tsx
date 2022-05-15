import React, { FC } from "react";

interface AlertErrorProps {
   alert: null | string
}

export const AlertError: FC<AlertErrorProps> = ({ alert }) => {
   if (alert) {
      return (
         <div style={{ zIndex: '5555', margin: '0 1rem' }} className="alert alert-danger" role="alert">
            {alert}
         </div>
      )
   }
   return (
      <></>
   )



}