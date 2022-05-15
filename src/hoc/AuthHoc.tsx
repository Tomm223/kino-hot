import React, { Children, FC } from "react";
import { useTypeSelector } from "../hook/useTypeSelector";
import { Navigate } from 'react-router-dom'
import { LocalStorageTypes } from "../types/urlQuery";
interface AuthHocProps {
   children: React.ReactNode | React.ReactNode[]
}


const AuthHoc: FC<AuthHocProps> = ({ children }) => {
   const user = useTypeSelector(state => state.user.user)
   const userSession = sessionStorage.getItem(LocalStorageTypes.USER)
   if (!user && !userSession) {
      return <Navigate to='/' state={{ modal: true }} ></Navigate>
   }
   return (
      <>
         {children}
      </>
   )


}

export default AuthHoc