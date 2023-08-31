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
      <Box>
        <Box sx = {{
          display: 'flex', 
          flexDirection: "column", 
          alignItems: 'flex-start',
          position: "absolute",
          left: "50%",
          top: "41.5%",
          transform: "translate(-50%, -50%)"
        }}>
          <Typography sx={{ typography: { sm: 'h2', xs: 'h3' } }}>
            Hi. I'm
          </Typography>
          <Typography sx={{ typography: { sm: 'h1', xs: 'h2' } }}>
            Terrence.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

export default Landing;
