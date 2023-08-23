import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Landing() {
  return (
          <Box sx = {{
            zIndex: 1000,
            position: "absolute",
            overflowY: "scroll",
            display: "flex", 
            width: "100vw", 
            height: "88vh",
             alignItems: "center", 
             justifyContent: "center"
          }}>
            <Box sx = {{display: 'flex', flexDirection: "column", alignItems: 'flex-start'}}>
              <Typography variant="h2">
                Hi. I'm
              </Typography>
              <Typography variant="h1" gutterBottom>
                Terrence.
              </Typography>
            </Box>
          </Box>
  );
}

export default Landing;
