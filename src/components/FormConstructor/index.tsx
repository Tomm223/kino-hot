import React, { FC, useEffect, useState } from "react";
import { Formik } from 'formik'
import { Input } from "./Input";
import { validationYup } from "./validation";
import { ClassesFormConstructor, initStateFormConstructor, TypesStateFormConstructor } from "../../types/form";

interface FormProps {
   state: initStateFormConstructor,
   classes: ClassesFormConstructor
}

const Form: FC<FormProps> = ({ state, classes }) => {
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

   function Handle(values: any) {
      console.log(values);

   }

   return (
      <Formik
         initialValues={state}
         validationSchema={validationYup}
         validateOnBlur
         onSubmit={Handle}
      >
         {({ values, errors, touched, isValid, handleBlur, handleChange, handleSubmit, dirty }) => (

            <form onSubmit={handleSubmit} className={classes.form} >
               {arrParams &&
                  arrParams.map((item) => {

                     return (
                        <Input
                           classes={{ input: classes.input, error: classes.error, block: classes.blockInput }}
                           state={{ errors, handleBlur, handleChange, touched, values, dirty }}
                           value={{
                              type: item === TypesStateFormConstructor.password ? 'password' : "text",
                              keyFormik: item, placeHolder: `${item.toUpperCase()}`,
                           }}
                        />
                     )
                  })
               }
               <button className={classes.btn} type="submit" disabled={!isValid}>Auth</button>
            </form>
         )}

      </Formik>
   )
}

export default Form

