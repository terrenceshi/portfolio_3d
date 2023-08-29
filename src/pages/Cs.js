import CsData from '../data/CsData.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';

function Cs() {
  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1450ms' }}
    >
      <Box sx = {{
        display: 'flex', 
        pt: 14
      }}>
        {CsData.map((project, projectIdx) => (
          <Paper elevation={3} key = {projectIdx}>
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
            </Box>
          </Paper>
        ))}
      </Box>
    </Fade>
  );
}

export default Cs;
