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
    }
  },
});

function App() {

  return (
    <div className = "App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Box sx = {{zIndex: 1001, position: "absolute"}}>
          <Navbar />
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

        <Scene />

      </ThemeProvider>

    </div>
  );
}

export default App;
