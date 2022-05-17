import cookie from 'js-cookie'

const getCookie = (cookiename) => {
   return cookie.get(cookiename)
}

export default getCookie