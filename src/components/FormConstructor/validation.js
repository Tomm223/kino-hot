import React from "react";
import * as yup from 'yup'

function checkDef(message) {
   return this.test("isValidCountry", message, function (value) {
      const { path, createError } = this

      if (!value) {
         return createError({ path, message: message ?? 'Поле Обязательно к заполнению' });
      }

      if (value.length < 3) {
         return createError({ path, message: message ?? 'Минимум 3 символа' });
      }

      if (value.length > 40) {
         return createError({ path, message: message ?? 'Максимум 40 символов' })
      }

      return true;
   });
}
yup.addMethod(yup.string, "checkDefMethod", checkDef);

const passwordCheck = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

const Validateschema = {
   name: yup.string()
      .min(3, 'A minimum of 3 characters is required')
      .max(40, 'Maximum allowed characters is 40')
      .checkDefMethod()
      .required('Please fill out this field'),
   name: yup.string()
      .checkDefMethod()

}

export const validationYup = yup.object().shape({
   name: yup.string().checkDefMethod(),
   email: yup.string().email().required('Обязательно к заполнению'),
   password: yup.string().checkDefMethod().matches(passwordCheck, 'Пароль должен содержать: cтрочные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов'),
})

//   name: yup.string().typeError('Должно быть строкой').required('Обязательно к заполнению'),~