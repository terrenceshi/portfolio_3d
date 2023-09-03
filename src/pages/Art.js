import { useEffect } from 'react';

import ArtData from '../data/ArtData.js';
import ArtBox from '../components/Artbox.js';
import Footer from "../components/Footer.js"
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

var thumbnailLoadLst = new Array(ArtData.length).fill(0);

function Art({thumbnailsLoaded, setThumbnailsLoaded, setSceneNumber, screenSize, windowDimensions}) {
  const artDataChunks = ArtData.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/3)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])

  const gridGap = {lg: 3, md: 2, sm: 1, xs: 3};

  useEffect(() => {
    setThumbnailsLoaded(false);
    setSceneNumber(2);
  }, []);

  return (
    <Fade 
      in={thumbnailsLoaded}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '2000ms' }}
    >
      <Box>
        <Box sx = {{
          display: thumbnailsLoaded ? 'flex': 'none', 
          flexDirection: "column", 
          gap: gridGap,
          pt: "12.5vh",
          pb: 14
          }}
        >
          {artDataChunks.map((lst, chunkIdx) => (
            <Box 
              key = {chunkIdx}
              sx = {{
                display: 'flex', 
                flexDirection: {sm: 'row', xs: 'column'}, 
                gap: gridGap
            }}>
              {lst.map((dict, rowIdx)=> (
                <ArtBox 
                  key = {rowIdx}
                  idx = {chunkIdx * 3 + rowIdx}
                  artDict = {dict} 
                  setThumbnailsLoaded = {setThumbnailsLoaded}
                  thumbnailLoadLst = {thumbnailLoadLst}
                  windowDimensions = {windowDimensions}
                />
              ))}
            </Box>
          ))}
        </Box>

        <Box sx = {{
          pb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Footer screenSize = {screenSize}/>
        </Box>

      </Box>
    </Fade>
    
  );
}

export default Art;
