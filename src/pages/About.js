import { useState } from 'react';

import pfp from "../assets/pfp.jpg"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';

function About() {
  const [pfpLoaded, setPfpLoaded] = useState(false)

  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1750ms' }}
    >
      <Box sx = {{
        display: 'flex', 
        flexDirection: "column", 
        width: {lg: 1000, md: 800, sm: 560, xs: 340},
        gap: 2,
        pt: "12.5vh"
      }}
      >
          <Typography sx={{ typography: { sm: 'h4', xs: 'h5' } }}>
            About Me
          </Typography>
          <Box sx = {{
            display: 'flex', 
            flexDirection: {sm: "row", xs: "column-reverse"}, 
            gap: 2, 
            alignItems: {sm: 'flex-start', xs: 'center'}
          }}>
            <Box sx = {{display: 'flex', flexDirection: "column", gap: 2}}>
              <Typography sx={{ typography: { md: 'body1', sm: 'body2', xs: 'body2' } }}>
                I'm a CS major from Georgia Tech. My forte lies in frontend, but I'm adept 
                as a full-stack engineer, with skills in backend and deployment. Also, 
                I'm proficient with AI, having implemented image classifiers and 
                using word vectorization for projects.
              </Typography>

              <Typography sx={{ typography: { md: 'body1', sm: 'body2', xs: 'body2' } }}>
                In my free time, I like to draw and make music. Sometimes, I'll do some 3D modeling.
              </Typography>
            </Box>

            <Box sx = {{display: pfpLoaded ? {sm:"block", xs: "none"} : "none"}}>
              <img
                src = {pfp} 
                alt = "pfp" 
                onLoad = {() => setPfpLoaded(true)}
                style = {{
                  width: 175, 
                  height: 175, 
                  borderRadius: "50%"
                }}
              />
            </Box>

            <div style = {pfpLoaded ? {display: "none"}:{display: "block"}}>
              <Skeleton 
                variant="circular" 
                sx = {{width: 175, height: 175}}
              />
            </div>
          </Box>
      </Box>
    </Fade>
  );
}

export default About;
