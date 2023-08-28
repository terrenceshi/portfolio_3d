import ArtData from '../data/ArtData.js';
import ArtBox from '../components/Artbox.js';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

var thumbnailLoadLst = new Array(ArtData.length).fill(0);

function Art({thumbnailsLoaded, setThumbnailsLoaded}) {
  const artDataChunks = ArtData.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/3)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])

  const gridGap = 3;

  return (
    <Fade 
      in={thumbnailsLoaded}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1450ms' }}
    >
      <Box>
        <Box sx = {{
          display: thumbnailsLoaded ? 'flex': 'none', 
          flexDirection: "column", 
          gap: gridGap,
          pt: 16
          }}
        >
          {artDataChunks.map((lst, chunkIdx) => (
            <Box sx = {{display: 'flex', flexDirection: 'row', gap: gridGap}} key = {chunkIdx}>
              {lst.map((dict, rowIdx)=> (
                <ArtBox 
                  key = {rowIdx}
                  idx = {chunkIdx * 3 + rowIdx}
                  artDict = {dict} 
                  setThumbnailsLoaded = {setThumbnailsLoaded}
                  thumbnailLoadLst = {thumbnailLoadLst}
                />
              ))}
            </Box>
          ))}
        </Box>

        {/* Placeholder meaningless box that exists just so that the footer stays at the bottom when art is not loaded*/}

        <Box sx = {{
          display: thumbnailsLoaded ? 'none' : 'flex'
        }}/>

      </Box>
    </Fade>
    
  );
}

export default Art;
