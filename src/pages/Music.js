import MusicData from '../data/MusicData.js';

import { useState, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(MusicData[0].src);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  })

  return (
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1450ms' }}
    >
      <Box sx = {{
        display: 'flex', 
        flexDirection: "column", 
        width: "600px",
        pt: "11vh" //was 14
      }}
      >
        <audio 
          src={currentSong}
          ref={audioElem}
          /*onTimeUpdate={onPlaying}*/
          onEnded={() => setIsPlaying(false)}
        />

        {MusicData.map((song, idx) => (
          <Box key = {idx}>
            <Box sx = {{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
              py: 2
            }}>
              <Box>
                <IconButton 
                  sx={{ "&:hover": { backgroundColor: "transparent" }}}
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    setCurrentSong(song.src);
                  }}
                >
                  {isPlaying & currentSong === song.src ? <PauseCircleIcon/> : <PlayCircleIcon/>}
                </IconButton>
              </Box>

              <Typography variant = "body">
                {song.title}
              </Typography>
            </Box>
            {idx != MusicData.length - 1 ? <Divider/> : <div/>}
          </Box>
        ))}
      </Box>
    </Fade>
  );
}

export default Music;
