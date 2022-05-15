export interface initStateFormConstructor {
   name?: string,
   lastName?: string,
   email?: string,
   password?: string,
   confirmPassword?: string,
   DOB?: string
   country?: string
   city?: string
   street?: string
}
export interface StateFormConstructorLogin {
   email: string
   password: string
}
export interface StateFormConstructorRegistration {
   name: string
   email: string
   password: string
}
export interface ClassesFormConstructor {
   form: string,
   blockInput: string,
   input: string,
   btn: string,
   error: string
}

export enum TypesStateFormConstructor {
   name = 'name',
   lastName = 'lastName',
   email = 'email',
   password = 'password',
   confirmPassword = 'confirmPassword',
   DOB = 'DOB',
   country = 'country',
   city = 'city',
   street = 'street',
}

export type TypeStateItemInLogin = TypesStateFormConstructor.email | TypesStateFormConstructor.password
