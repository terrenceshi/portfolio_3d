import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

function Landing() {
  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1750ms' }}
    >
      <Box sx = {{
        display: 'flex', 
        flexDirection: "column", 
        alignItems: 'flex-start',
        pt: "28.5vh"
      }}>
        <Typography variant="h2">
          Hi. I'm
        </Typography>
        <Typography variant="h1">
          Terrence.
        </Typography>
      </Box>
    </Fade>
  );
}

export default Landing;
