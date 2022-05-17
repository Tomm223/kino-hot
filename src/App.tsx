import React, { useEffect } from 'react';
import Layout from './pages/Layout';
import { GetTop100Films } from './Fetch';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import FilmList from './pages/FilmList';
import Film from './pages/Film';
import { ThemeProvider } from 'styled-components'
import { useThemeStyled } from './hook/useThemeStyled'
import AuthHoc from './hoc/AuthHoc';
import { LocalStorageTypes } from './types/urlQuery';
import { useAction } from './hook/useAction';
import getCookie from './hook/cookie/getCookie';
import setCookei from './hook/cookie/setCookie';

function App() {
  // user AUTH не знаю куда это положить и как решить проблему иначе
  const { ActionUserChange } = useAction()
  useEffect(() => {
    const userGet = getCookie(LocalStorageTypes.USER)
    if (userGet) {
      ActionUserChange(JSON.parse(userGet))
    }
  }, [])

  const theme = useThemeStyled()

  useEffect(() => {
    const funcFilms = async () => {
      const resp = await GetTop100Films()
    }
    funcFilms()

  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<FilmList />} />
              <Route path='film' element={
                <AuthHoc>
                  <Film />
                </AuthHoc>
              } />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
