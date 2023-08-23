import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
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
          about
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
