import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar.js"
import Scene from "./components/Scene.js"

import Landing from "./components/Landing.js"
import About from "./components/About.js"
import Art from "./components/Art.js"
import Cs from "./components/Cs.js"
import Music from "./components/Music.js"

import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
          justifyContent: "center"
        }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/Art" element={<Art />} />
            <Route path="/CS" element={<Cs />} />
            <Route path="/Music" element={<Music />} />
          </Routes>
        </Box>

        

        <Scene sceneNumber = {sceneNumber}/>

      </ThemeProvider>

    </div>
  );
}

export default App;
