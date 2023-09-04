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
import Fade from '@mui/material/Fade';

const bigFontTheme = createTheme({
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
const smallFontTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontSize: 14
  },
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const [ sceneNumber, setSceneNumber ] = useState(0); //0 = landing, 1 = about, 2 = art, 3 = CS, 4 = music
  const [ thumbnailsLoaded, setThumbnailsLoaded ] = useState(false);
  const [ screenSize, setScreenSize ] = useState('md');
  const [ canvasLoaded, setCanvasLoaded ] = useState(false);
  const [ atTop, setAtTop ] = useState(true);
  const [ audioPlaying, setAudioPlaying ] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const theme = useTheme();

  function handleResize() {
    setWindowDimensions(getWindowDimensions());

    var width = getWindowDimensions().width;
    if (width >= theme.breakpoints.values.xs && width < theme.breakpoints.values.sm) {
      setScreenSize('xs');
    } else if (width >= theme.breakpoints.values.sm && width < theme.breakpoints.values.md) {
      setScreenSize('sm');
    } else if (width >= theme.breakpoints.values.md && width < theme.breakpoints.values.lg) {
      setScreenSize('md');
    } else if (width >= theme.breakpoints.values.lg && width < theme.breakpoints.values.xl) {
      setScreenSize('lg');
    } else if (width >= theme.breakpoints.values.xl) {
      setScreenSize('xl');
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className = "App">
      <ThemeProvider theme={windowDimensions.height <= 770 ? smallFontTheme : bigFontTheme}>
        <CssBaseline />

        <Fade 
          in={canvasLoaded}
          timeout={{ enter: 1500 }}
        >
          <Box>
            <Box sx = {{zIndex: 1003, position: "absolute"}}>
              <Navbar 
                atTop = {atTop} 
                setAtTop = {setAtTop}
              />
            </Box>

            <Scene 
              sceneNumber = {sceneNumber}
              thumbnailsLoaded = {thumbnailsLoaded}
              screenSize = {screenSize}
              setCanvasLoaded = {setCanvasLoaded}
              audioPlaying={audioPlaying}
            />

            <Box 
              onScroll={(e) => {
                if(e.currentTarget.scrollTop !== 0){
                  setAtTop(false);
                } else {
                  setAtTop(true);
                }
              }}
              sx = {{
                zIndex: 1001, 
                position: "relative",
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
                    screenSize = {screenSize}
                    windowDimensions = {windowDimensions}
                  />
                } />
                <Route path="/CS" element={<Cs setSceneNumber={setSceneNumber} />} />
                <Route path="/Music" element={
                  <Music 
                    setSceneNumber={setSceneNumber}
                    audioPlaying={audioPlaying}
                    setAudioPlaying={setAudioPlaying}
                  />} 
                />
              </Routes>
            </Box>

            <Box sx = {{
              display: 'flex',
              pb: 10,
              opacity: sceneNumber === 1 || sceneNumber === 0 ? 1 : 0,
              transition: "opacity 900ms",
              position: "absolute",
              bottom: 0,
              zIndex: sceneNumber === 1 || sceneNumber === 0 ? 1002 : 0,
              width: "100vw",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Footer screenSize = {screenSize}/>
            </Box>

          </Box>
        </Fade>

        <FakeLanding canvasLoaded = {canvasLoaded} screenSize = {screenSize}/>

      </ThemeProvider>

    </div>
  );
}

export default App;
