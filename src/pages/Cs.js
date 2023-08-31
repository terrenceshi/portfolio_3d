import { useState } from 'react';

import CsData from '../data/CsData.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const MuiImg = styled("img")({});

function Cs() {
  const [activeIdx, setActiveIdx] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const leftTransform = {
    lg: "translateX(-25%) scale(0.8)",
    md: "translateX(-20%) scale(0.8)", 
    sm: "translateX(-20%) scale(0.8)", 
    xs: "translateX(-15%) scale(0.8)"
  };

  const rightTransform = {
    lg: "translateX(25%) scale(0.8)", 
    md: "translateX(20%) scale(0.8)", 
    sm: "translateX(20%) scale(0.8)", 
    xs: "translateX(15%) scale(0.8)"
  };

  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1750ms' }}
    >
      <Box sx = {{
        display: "flex",
        justifyContent: "center", 
        pt: {sm: "12.5vh", xs: "20vh"},
        pl: {lg: "40vw", md: "32vw", sm: "32vw", xs: "0vw"}
      }}>
        {CsData.map((project, projectIdx) => {
          const indexLeft = mod(activeIdx - 1, CsData.length);
          const indexRight = mod(activeIdx + 1, CsData.length);

          return (
            <Paper 
              elevation={3} 
              key = {projectIdx} 
              sx = {{
                position: "absolute",
                transition: "900ms",
                zIndex: projectIdx === activeIdx ? 1002 : 1001,
                opacity: 
                  projectIdx === activeIdx ? 1 : 
                  projectIdx === indexRight || projectIdx === indexLeft ? 0.6 : 0,
                transform: 
                  projectIdx === activeIdx ? "scale(1)" :
                  projectIdx === indexLeft ?  leftTransform:
                  projectIdx === indexRight ? rightTransform : "",
            }}>
            
              <Box sx = {{
                display: 'flex', 
                flexDirection: "column", 
                width: { lg: 500, md: 500, sm: 380, xs: 270 },
                gap: 2,
                p: 4,
                pt: 3
              }}>
                <Typography sx = {{typography:{sm: "h5", xs: "body1"}}}>
                  {project.title}
                </Typography>

                <div style={{flexDirection:'row'}}>
                  <MuiImg
                    src = {project.image} 
                    sx = {{
                      width: 175, 
                      height: 175, 
                      float: "right", 
                      paddingLeft: 2, 
                      paddingBottom: 2,
                      display: {md: 'block', sm: 'none', xs: 'none'}
                  }}/>
                  {project.description.map((text, textIdx) => (
                    <Typography 
                      variant="body2" 
                      key = {textIdx} 
                      sx = {{
                        textIndent: {sm: 32, xs: 0}, 
                        pb: 2,
                        display: textIdx !== 0 ? {sm: "block", xs: "none"} : "block"
                      }}>
                      {text}
                    </Typography>
                  ))}
                  
                  <Button
                    variant="text"
                    component = {Link}
                    to = {project.link}
                    sx = {{color: 'primary.main'}}
                    disabled = {project.disabled}
                  >
                    Read more
                  </Button>
                </div>

                <Box sx = {{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: 'space-between'
                }}>
                    <IconButton 
                        onClick={()=>activeIdx <= 0 ? setActiveIdx(CsData.length-1) : setActiveIdx((activeIdx-1)%CsData.length)}
                        disabled={projectIdx !== activeIdx}
                    >
                        <ArrowLeftIcon/>
                    </IconButton>
                    
                    <IconButton
                        onClick={()=>setActiveIdx((activeIdx+1)%CsData.length)}
                        disabled={projectIdx !== activeIdx}
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
