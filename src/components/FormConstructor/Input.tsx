import React, { FC, useContext } from "react";

interface formItemProps {
   classes: {
      input: string,
      error: string,
      block: string
   }
   value: {
      type: type,
      placeHolder?: string,
      keyFormik: string,
   }
   state: {
      values: any,
      handleBlur: (e: React.FocusEvent<any, Element>) => void,
      handleChange: (e: React.ChangeEvent<any>) => void,
      touched: any,
      dirty: any
      errors: any
   }
}


type type = "text" | "checkbox" | "password" | "radio"

export const Input: FC<formItemProps> = ({ value, state, classes }) => {
   const { type, keyFormik, placeHolder } = value
   const { values, handleBlur, handleChange, touched, errors } = state


   return (
      <div className={classes.block}>
         <input className={classes.input} type={`${type}`} name={`${keyFormik}`} onChange={handleChange}
            onBlur={handleBlur} value={values[`${keyFormik}`]} placeholder={placeHolder} />
         {touched[`${keyFormik}`] && errors[`${keyFormik}`] &&
            <p className={classes.error}>{errors[`${keyFormik}`]}</p>
         }
      </div>


   )
}
