import React, { useEffect } from 'react';
import Layout from './pages/Layout';
import { GetTop100Films } from './Fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilmList from './pages/FilmList';
import Film from './pages/Film';
import { ThemeProvider } from 'styled-components'
import { useThemeStyled } from './hook/useThemeStyled'

function App() {

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
              <Route path='film' element={<Film />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
