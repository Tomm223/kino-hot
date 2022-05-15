import React, { FC, useContext } from "react";

import style from './index.module.scss'
const styles = style as any


interface formItemProps {
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

export const Input: FC<formItemProps> = ({ value, state }) => {
   const { type, keyFormik, placeHolder } = value
   const { values, handleBlur, handleChange, touched, errors } = state


   return (
      <div className={styles.form_block}>
         <input className={styles.form_input} type={`${type}`} name={`${keyFormik}`} onChange={handleChange}
            onBlur={handleBlur} value={values[`${keyFormik}`]} placeholder={placeHolder} />
         {touched[`${keyFormik}`] && errors[`${keyFormik}`] &&
            <p className={styles.form_error}>{errors[`${keyFormik}`]}</p>
         }
      </div>


   )
}
