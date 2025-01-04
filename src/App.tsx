import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import './App.scss'
import { HomePage } from './HomePage';
import { NavBar } from './NavBar'
import ParticlesComponent from './ParticlesBackground';
import { Projects } from './Projects';
import { AppPageType } from './utils/common';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
                light: '#FFFBFF',
                contrastText: '#891131',
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
                    {page == "HOME" && <div className="particle-background">
                        <ParticlesComponent />
                    </div>}
                    <HomePage show={page === "HOME"} />
                    <Projects show={page === "PROJECTS"} />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
