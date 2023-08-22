import { useState, useRef } from 'react';

import Navbar from "./components/Navbar.js"
import Scene from "./components/Scene.js"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

  return (
    <div className = "App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Box sx = {{zIndex: 1001, position: "absolute"}}>
          <Navbar setSceneNumber={setSceneNumber}/>
        </Box>

        <Box sx = {{zIndex: 1000, position: "absolute", display: "flex", flexDirection: "column"}}>
          <Box sx = {{display: "flex", width: "100vw", height: "88vh", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <Box sx = {{display: 'flex', flexDirection: "column", alignItems: 'flex-start'}}>
              <Typography variant="h2">
                Hi. I'm
              </Typography>
              <Typography variant="h1" gutterBottom>
                Terrence.
              </Typography>
            </Box>
            
          </Box>
        </Box>

        <Scene
          sceneNumber = {sceneNumber}
          setSceneNumber = {setSceneNumber}
        />

      </ThemeProvider>

    </div>
  );
}

export default App;
