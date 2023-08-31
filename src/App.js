import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Scene from "./components/Scene.js"

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

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const lg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  
  const location = useLocation();
  
  useEffect(() => {
    if(location['pathname'] === '/' & sceneNumber !== 0){
      setSceneNumber(0)
    }
    if(location['pathname'] === '/About' & sceneNumber !== 1){
      setSceneNumber(1)
    }
    if(location['pathname'] === '/Art' & sceneNumber !== 2){
      setSceneNumber(2)
    }
    if(location['pathname'] === '/CS' & sceneNumber !== 3){
      setSceneNumber(3)
    }
    if(location['pathname'] === '/Music' & sceneNumber !== 4){
      setSceneNumber(4)
    }
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
    console.log(screenSize);
  });

  return (
    <div className = "App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

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
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/Art" element={
              <Art 
                thumbnailsLoaded = {thumbnailsLoaded}
                setThumbnailsLoaded = {setThumbnailsLoaded} 
              />
            } />
            <Route path="/CS" element={<Cs />} />
            <Route path="/Music" element={
              <Music 
                screenSize = {screenSize}
              />} 
            />
          </Routes>

          <Box sx = {{pb: 10, pt: sceneNumber === 2 ? 14 : 4}}>
            <Footer screenSize = {screenSize}/>
          </Box>
          
        </Box>

        <Scene 
          sceneNumber = {sceneNumber}
          thumbnailsLoaded = {thumbnailsLoaded}
          screenSize = {screenSize}
        />

      </ThemeProvider>

    </div>
  );
}

export default App;
