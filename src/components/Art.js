import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Art() {
  return (
        <Box sx = {{zIndex: 1000, position: "absolute", overflowY: "scroll"}}>
          <Box sx = {{display: "flex", width: "100vw", height: "88vh", alignItems: "center", justifyContent: "center"}}>
            <Box sx = {{display: 'flex', flexDirection: "column", alignItems: 'flex-start'}}>
              <Typography variant="h2">
                Hi. I'm
              </Typography>
              <Typography variant="h1" gutterBottom>
                Shut your bitch ass up
              </Typography>
            </Box>
          </Box>
        </Box>
  );
}

export default Art;
