import pfp from "../assets/cs_thumbs/b2n2.png"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Cs() {
  return (
    <Box sx = {{
      display: 'flex', 
      flexDirection: "column", 
      width: "1000px",
      gap: 2,
      pt: 16
    }}>
        <Typography variant="h5">
          Books2Nooks
        </Typography>
        <Box sx = {{display: 'flex', flexDirection: "row", gap: 2}}>
          <Box sx = {{display: 'flex', flexDirection: "column", gap: 2}}>
            <Typography variant="body">
              Books2Nooks takes a user inputted book and generates a music playlist. 
              We collected 16k books and 400k songs from various datasets. Then data
              was then cleaned such that all songs were in english and all songs could 
              be found on spotify. Next, all song lyrics and book descriptions were
              converted to vectors using Sentence Transformers. Cosine Similarity scores 
              were then computed for all songs and books. Whenever the user selects a 
              book, the top 15 similar songs are returned.
            </Typography>
          </Box>

          <img src = {pfp} alt = "pfp" style = {{width: 175, height: 175}}/>
        </Box>
      
    </Box>
  );
}

export default Cs;
