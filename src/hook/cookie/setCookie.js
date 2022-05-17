import cookie from 'js-cookie';

const setCookei = (path, cookiename, value) => {
   cookie.set(cookiename, value, {
      expires: 1, // 1 day
      secure: true,
      sameSite: 'strict',
      path: path
   })

}

export default setCookei
