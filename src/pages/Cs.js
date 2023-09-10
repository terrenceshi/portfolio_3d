import { useState, useEffect } from 'react';

import CsData from '../data/CsData.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LaunchIcon from '@mui/icons-material/Launch'
import { Link } from "react-router-dom";  
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material';

const MuiImg = styled("img")({});

function Cs({setSceneNumber}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  var loadLst = new Array(CsData.length).fill(useState(false));

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

  useEffect(() => {
    setSceneNumber(3);
  }, []);
  
  return (
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
          <Box
            key = {projectIdx} 
            sx = {{
              position: "absolute",
              display: 'flex', 
              flexDirection: "column", 
              width: { lg: 500, md: 500, sm: 380, xs: 270 },
              gap: 2,
              p: 4,
              pt: 3,
              transition: "900ms",
              zIndex: projectIdx === activeIdx ? 1002 : 1001,
              opacity: 
                projectIdx === activeIdx ? 1 : 
                projectIdx === indexRight || projectIdx === indexLeft ? 0.6 : 0,
              transform: 
                projectIdx === activeIdx ? "scale(1)" :
                projectIdx === indexLeft ?  leftTransform:
                projectIdx === indexRight ? rightTransform : "",
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(20px)' ,
              animation: 
                !firstLoad ? "" :
                projectIdx === activeIdx ? "1500ms cubic-bezier(0.4,0,0.2,1) 1750ms fadeIn, 1750ms wait":"1500ms cubic-bezier(0.4,0,0.2,1) 1750ms fadeIn6, 1750ms wait",
              borderRadius: 2,
              
          }}>
            <Box sx = {{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Typography sx = {{typography:{md: "h5", sm: "h6", xs: "body1"}}}>
                {project.title}
              </Typography>

              <IconButton 
                disabled = {project.disabled} 
                component = {Link}
                to = {project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx = {{display: {sm: 'inline-flex', xs: 'none'}}}
              >
                <LaunchIcon/>
              </IconButton>
            </Box>

            <div style={{flexDirection:'row'}}>
              <Fade 
                in={loadLst[projectIdx][0]}
                timeout={{ enter: 1500 }}
              >
                <MuiImg
                  src = {project.image} 
                  onLoad = {() => {
                    loadLst[projectIdx][1](true)
                  }}
                  sx = {{
                    width: 150, 
                    height: 150, 
                    pl: 2,
                    pb: 2,
                    float: "right",
                    display: loadLst[projectIdx][0] ? {md: 'block', sm: 'none', xs: 'none'} : "none"
                }}/>
              </Fade>

              <Skeleton variant = {"rectangular"} sx = {{
                width: 134, 
                height: 134, 
                ml: 2,
                mb: 2,
                float: "right",
                display: loadLst[projectIdx][0] ? "none" : {md: 'block', sm: 'none', xs: 'none'}
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
                target="_blank"
                rel="noopener noreferrer"
                fullWidth={false}
                sx = {{color: 'primary.main', display: {sm: "none", xs: "inline-flex"}}}
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
                    onClick={()=>{setFirstLoad(false); activeIdx <= 0 ? setActiveIdx(CsData.length-1) : setActiveIdx((activeIdx-1)%CsData.length)}}
                    disabled={projectIdx !== activeIdx}
                >
                    <ArrowLeftIcon/>
                </IconButton>
                
                <IconButton
                    onClick={()=>{setFirstLoad(false); setActiveIdx((activeIdx+1)%CsData.length)}}
                    disabled={projectIdx !== activeIdx}
                >
                    <ArrowRightIcon/>
                </IconButton>
            </Box>
          </Box>
        )
      })}
    </Box>
  );
}

export default Cs;
