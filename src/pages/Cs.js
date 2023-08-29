import { useState } from 'react';

import CsData from '../data/CsData.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Cs() {
  const [activeIdx, setActiveIdx] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1450ms' }}
    >
      <Box sx = {{display: "flex",justifyContent: "center", pt: 16}}>
        {CsData.map((project, projectIdx) => {
          const indexLeft = mod(activeIdx - 1, CsData.length);
          const indexRight = mod(activeIdx + 1, CsData.length);

          const leftStyle = {
            transform: "translateX(-25%) scale(0.8)",
            transition: "900ms",
            opacity: "0.4"
          }
          const rightStyle = {
            transform: "translateX(25%) scale(0.8)",
            transition: "900ms",
            opacity: "0.4"
          }
          const midStyle = {
            opacity: 1,
            transform: "scale(1)",
            zIndex: 1002
          }

          let finalStyle;

          if (projectIdx === activeIdx) {
            finalStyle = midStyle;
          } else if (projectIdx === indexRight) {
            finalStyle = rightStyle;
          } else if (projectIdx === indexLeft) {
            finalStyle = leftStyle;
          }

          return (
            <Paper elevation={3} key = {projectIdx} sx = {{position: "absolute"}} style = {finalStyle}>
              <Box sx = {{
                display: 'flex', 
                flexDirection: "column", 
                width: "600px",
                gap: 2,
                p: 4,
                pt: 3
              }}>
                <Box sx = {{display: 'flex',flexDirection: 'row', alignItems: 'center', gap: 2}}>
                  <Typography variant="h5">
                    {project.title}
                  </Typography>

                  <IconButton disabled = {project.disabled}>
                    <LaunchIcon/>
                  </IconButton>
                </Box>

                <div style={{flexDirection:'row'}}>
                  <img src = {project.image} style = {{width: 175, height: 175, float: "right", paddingLeft: 2 * 8, paddingBottom: 2 * 8}}/>
                  {project.description.map((text, textIdx) => (
                    <Typography variant="body2" key = {textIdx} sx = {{textIndent: "32px", pb: 2}}>
                      {text}
                    </Typography>
                  ))}
                </div>

                <Box sx = {{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: 'space-between'
                }}>
                    <IconButton 
                        onClick={()=>activeIdx <= 0 ? setActiveIdx(CsData.length-1) : setActiveIdx((activeIdx-1)%CsData.length)}
                    >
                        <ArrowLeftIcon/>
                    </IconButton>
                    
                    <IconButton
                        onClick={()=>setActiveIdx((activeIdx+1)%CsData.length)}
                    >
                        <ArrowRightIcon/>
                    </IconButton>
                </Box>
              </Box>
            </Paper>
          )
        })}
      </Box>
    </Fade>
  );
}

export default Cs;
