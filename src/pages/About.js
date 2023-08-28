import { useState } from 'react';

import pfp from "../assets/pfp.jpg"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function About() {
  const [pfpLoaded, setPfpLoaded] = useState(false)

  return (
    <Box sx = {{
      display: 'flex', 
      flexDirection: "column", 
      width: "1000px",
      gap: 2,
      pt: 16
    }}
    >
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

          {/* 
            Might be kinda complex to animate once on load:
            https://medium.com/@davidfalconbernhard/how-to-animate-once-on-page-load-in-react-js-e357fd899a4b
            , animation: "fadeIn 1.25s"

            However, doesn't really matter if whole page is animated
          */}

          <div style = {pfpLoaded ? {display: "block"}:{display: "none"}}>
            <img
              src = {pfp} 
              alt = "pfp" 
              onLoad = {() => setPfpLoaded(true)}
              style = {{width: 175, height: 175, borderRadius: "50%"}}
            />
          </div>

          <div style = {pfpLoaded ? {display: "none"}:{display: "block"}}>
            <Skeleton 
              variant="circular" 
              sx = {{width: 175, height: 175}}
            />
          </div>
          
        </Box>
      
    </Box>
  );
}

export default About;
