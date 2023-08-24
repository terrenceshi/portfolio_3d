import artData from '../artData.js';
import ArtBox from './Artbox.js';

import Box from '@mui/material/Box';

function Art() {
  const p1Idx = Math.floor(artData.length / 3) * 3;
  const artDataP1 = artData.slice(0, p1Idx);
  const artDataP2 = artData.slice(p1Idx, artData.length)

  const artDataP1Chunks = artDataP1.reduce((resultArray, item, index) => { 
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
      {artDataP1Chunks.map((lst, index) => (
        <Box sx = {{display: 'flex', flexDirection: 'row', gap: gridGap}} key = {index}>
          <ArtBox artDict = {lst[0]} key = {index + "," + 0} />
          <ArtBox artDict = {lst[1]} key = {index + "," + 1} />
          <ArtBox artDict = {lst[2]} key = {index + "," + 2} />
        </Box>
        
      ))}
      
      <Box sx = {{display: 'flex', flexDirection: 'row', gap: gridGap, pb: 16}}>
        {artDataP2.map((dict, index) => (
          <ArtBox artDict = {dict} key = {index} />
        ))}
      </Box>
    </Box>
  );
}

export default Art;
