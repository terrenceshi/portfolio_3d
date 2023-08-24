import artData from '../artData.js';
import ArtBox from './Artbox.js';

import Box from '@mui/material/Box';

function Art() {
  const artDataChunks = artData.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/3)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])

  const gridGap = 3;

  return (
    <Box sx = {{
      display: 'flex', 
      flexDirection: "column", 
      gap: gridGap,
      pt: 16
    }}>
      {artDataChunks.map((lst, index) => (
        <Box sx = {{display: 'flex', flexDirection: 'row', gap: gridGap}} key = {index}>
          {lst.map((dict, index)=> (
            <ArtBox artDict = {dict} key = {index} />
          ))}
        </Box>
        
      ))}
    </Box>
  );
}

export default Art;
