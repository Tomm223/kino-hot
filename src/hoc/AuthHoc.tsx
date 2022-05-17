import React, { Children, FC } from "react";
import { useTypeSelector } from "../hook/useTypeSelector";
import { Location, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LocalStorageTypes } from "../types/urlQuery";
interface AuthHocProps {
   children: React.ReactNode | React.ReactNode[]
}


const AuthHoc: FC<AuthHocProps> = ({ children }) => {
   const user = useTypeSelector(state => state.user.user)
   const userSession = sessionStorage.getItem(LocalStorageTypes.USER)
   const location = useLocation()
   const locState = location.state as Location

   if (!user && !userSession) {
      return <Navigate to={locState.pathname + locState.search || '/'} state={{ modal: true }} ></Navigate>

   }
   return (
      <>
         {children}
      </>
   )


}

export default AuthHoc