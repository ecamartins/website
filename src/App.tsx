import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import './App.scss'
import { HomePage } from './HomePage';
import { NavBar } from './NavBar'
import { Projects } from './Projects';
import { AppPageType } from './utils/common';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#64b5f6',
        light: '#FFFBFF',
        contrastText: '#0d47a1',
      }
    },
    typography: {
      fontFamily: "Encode Sans Condensed"
    }
  });
  const [page, setPage] = useState<AppPageType>("HOME");

  return (
    <ThemeProvider theme={theme}>
      <div className="website-wrapper">
        <NavBar onNavBarClick={(page: AppPageType) => setPage(page)} />
        <div className="content">
          <HomePage show={page === "HOME"} />
          <Projects show={page === "PROJECTS"} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
