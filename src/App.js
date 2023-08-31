import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Scene from "./components/Scene.js"
import FakeLanding from "./components/FakeLanding.js"
import Landing from "./pages/Landing.js"
import About from "./pages/About.js"
import Art from "./pages/Art.js"
import Cs from "./pages/Cs.js"
import Music from "./pages/Music.js"

import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from '@mui/material/Fade';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontSize: 18
  },
});

function App() {
  const [ sceneNumber, setSceneNumber ] = useState(0); //0 = landing, 1 = about, 2 = art, 3 = CS, 4 = music
  const [ thumbnailsLoaded, setThumbnailsLoaded ] = useState(false);
  const [ screenSize, setScreenSize ] = useState('md');
  const [ canvasLoaded, setCanvasLoaded ] = useState(false);

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const lg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    if (xs) {
      setScreenSize('xs');
    } else if (sm) {
      setScreenSize('sm');
    } else if (md) {
      setScreenSize('md');
    } else if (lg) {
      setScreenSize('lg');
    } else if (xl) {
      setScreenSize('xl');
    }
    //console.log(screenSize);
  });

  return (
    <div className = "App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Fade 
          in={canvasLoaded}
          timeout={{ enter: 1500 }}
        >
          <Box>
            <Box sx = {{zIndex: 1001, position: "absolute", pt: 1}}>
              <Navbar/>
            </Box>

            <Box sx = {{
              zIndex: 1000, 
              position: "absolute",
              overflowY: "scroll",
              display: "flex", 
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              justifyContent: 'space-between',
              flexDirection: "column"
            }}>
              <Routes>
                <Route path="/" element={<Landing setSceneNumber={setSceneNumber}/>} />
                <Route path="/About" element={<About setSceneNumber={setSceneNumber}/>} />
                <Route path="/Art" element={
                  <Art 
                    thumbnailsLoaded = {thumbnailsLoaded}
                    setThumbnailsLoaded = {setThumbnailsLoaded} 
                    setSceneNumber={setSceneNumber}
                  />
                } />
                <Route path="/CS" element={<Cs setSceneNumber={setSceneNumber}/>} />
                <Route path="/Music" element={
                  <Music 
                    screenSize = {screenSize}
                    setSceneNumber={setSceneNumber}
                  />} 
                />
              </Routes>

              <Box sx = {{pb: 10, pt: sceneNumber === 2 || 4 ? 14 : 2}}>
                <Footer screenSize = {screenSize}/>
              </Box>
              
            </Box>

            <Scene 
              sceneNumber = {sceneNumber}
              thumbnailsLoaded = {thumbnailsLoaded}
              screenSize = {screenSize}
              setCanvasLoaded = {setCanvasLoaded}
            />
          </Box>
        </Fade>

        <FakeLanding canvasLoaded = {canvasLoaded} screenSize = {screenSize}/>

      </ThemeProvider>

    </div>
  );
}

export default App;
