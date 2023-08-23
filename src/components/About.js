import pfp from "../assets/pfp.jpg"

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
      alignItems: "center", 
      justifyContent: "center",
      pt: 4
    }}>
      <Box sx = {{
        display: 'flex', 
        flexDirection: "column", 
        width: "1000px",
        gap: 2
      }}>
          <Typography variant="h4">
            About Me
          </Typography>
          <Box sx = {{display: 'flex', flexDirection: "row", gap: 2}}>
            <Box sx = {{display: 'flex', flexDirection: "column", gap: 2}}>
              <Typography variant="body">
                I'm a CS major from Georgia Tech. My forte lies in frontend, but I'm adept 
                as a full-stack engineer, with skills in backend and deployment.
              </Typography>
              <Typography variant="body">
                Additionally, I'm proficient in the realm of AI, with experience implementing image 
                classifiers and using word vectorization techniques for various applications.
              </Typography>
              <Typography variant="body">
                In my free time, I like to draw and make music. Sometimes, I'll do some 3D modeling.
              </Typography>
            </Box>

            <img src = {pfp} alt = "pfp" style = {{width: 175, height: 175, borderRadius: "50%"}}/>
          </Box>
        
      </Box>
    </Box>
  );
}

export default About;
