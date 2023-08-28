import CsData from '../data/CsData.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

function Cs() {
  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1450ms' }}
    >
      <Box sx = {{
        display: 'flex', 
      }}>
        {CsData.map((project, projectIdx) => (
          <Box key = {projectIdx} sx = {{
            display: 'flex', 
            flexDirection: "column", 
            width: "600px",
            gap: 2,
            pt: 16
          }}>
            <Typography variant="h5">
              {project.title}
            </Typography>

            <Box sx = {{display: 'flex', flexDirection: "row", gap: 2}}>
              <Box sx = {{display: 'flex', flexDirection: "column", gap: 2}}>
                {project.description.map((text, textIdx) => (
                  <Typography variant="body" key = {textIdx}>
                    {text}
                  </Typography>
                ))}
              </Box>

              <img src = {project.image} style = {{width: 175, height: 175}}/>
            </Box>
          </Box>
        ))}
      </Box>
    </Fade>
  );
}

export default Cs;
