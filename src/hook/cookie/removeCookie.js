import cookie from 'js-cookie'

const removeCookie = (cookiename) => {
   cookie.remove(cookiename)
}

export default removeCookie