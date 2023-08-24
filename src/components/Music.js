import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Music() {
  return (
    <Box sx = {{
      display: 'flex', 
      flexDirection: "column", 
      alignItems: 'flex-start',
      pt: 33
    }}>
      <Typography variant="h2">
        Hi. I'm
      </Typography>
      <Typography variant="h1">
        mnusic
      </Typography>
    </Box>
  );
}

export default Music;
