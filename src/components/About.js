import pfp from "../assets/pfp.jpg"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <Box sx = {{
      display: 'flex', 
      flexDirection: "column", 
      width: "1000px",
      gap: 2,
      pt: 16
    }}>
        <Typography variant="h4">
          About Me
        </Typography>
        <Box sx = {{display: 'flex', flexDirection: "row", gap: 2}}>
          <Box sx = {{display: 'flex', flexDirection: "column", gap: 2}}>
            <Typography variant="body">
              I'm a CS major from Georgia Tech. My forte lies in frontend, but I'm adept 
              as a full-stack engineer, with skills in backend and deployment. Also, 
              I'm proficient with AI, having implemented image classifiers and 
              using word vectorization for projects.
            </Typography>

            <Typography variant="body">
              In my free time, I like to draw and make music. Sometimes, I'll do some 3D modeling.
            </Typography>
          </Box>

          <img src = {pfp} alt = "pfp" style = {{width: 175, height: 175, borderRadius: "50%"}}/>
        </Box>
      
    </Box>
  );
}

export default About;
