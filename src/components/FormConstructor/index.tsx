import React, { FC, useEffect, useState } from "react";
import { Formik } from 'formik'
import { Input } from "./Input";
import { ClassesFormConstructor, initStateFormConstructor, TypesStateFormConstructor } from "../../types/form";

import style from './index.module.scss'
const styles = style as any

interface FormProps {
   validate: any
   state: initStateFormConstructor
   onSubmit: (values: any) => void
}
interface Values {
   email: string,
   name?: string,
   password: string
}

const Form: FC<FormProps> = ({ state, validate, onSubmit }) => {
   // touched = boolean | работали ли мы уже с этой формой
   // dirty = boolean | изменялись ли значения в форме 
   const [arrParams, setArrParams] = useState<string[]>([])
   useEffect(() => {
      const arr = []
      for (var key in state) {
         arr.push(key)
      }
      setArrParams(arr)
   }, [state])


   return (
      <Formik
         initialValues={state}
         validationSchema={validate}
         validateOnBlur
         onSubmit={onSubmit}
      >
         {({ values, errors, touched, isValid, handleBlur, handleChange, handleSubmit, dirty }) => (

            <form onSubmit={handleSubmit} className={styles.form} >
               {arrParams &&
                  arrParams.map((item) => {

                     return (
                        <Input
                           key={item}
                           state={{ errors, handleBlur, handleChange, touched, values, dirty }}
                           value={{
                              type: item === TypesStateFormConstructor.password ? 'password' : "text",
                              keyFormik: item, placeHolder: `${item.toUpperCase()}`,
                           }}
                        />
                     )
                  })
               }
               <button className={styles.form_btn} type="submit" disabled={!dirty}>Auth</button>
            </form>
         )}

      </Formik>
   )
}

export default Form

