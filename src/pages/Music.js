import MusicData from '../data/MusicData.js';

import { useState, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import Popover from '@mui/material/Popover';
import Slider from '@mui/material/Slider';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(MusicData[0].src);
  const [songTitle, setSongTitle] = useState(MusicData[0].title);

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
      style={{ transitionDelay: '1750ms' }}
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

          <Paper elevation={0}>
          <Box sx = {{display: 'flex',flexDirection: 'column', alignItems: 'center', gap: 2, p: 2}}>
            <Typography variant = "body2">
              {songTitle}
            </Typography>

            <Box sx = {{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center'}}>
              <Typography variant = "body2">
                {'0:00'}
              </Typography>
              <Slider size="small" sx = {{width: 300}}/>
              <Typography variant = "body2">
                {'3:33'}
              </Typography>
            </Box>
            
            <Box sx = {{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly'}}>
              <Box sx = {{width: 46.84, height: 46.84}}/>

              <Box sx = {{display: 'flex', flexDirection: 'row', gap: 2}}>
                <IconButton>
                  <SkipPreviousIcon fontSize = {'large'}/>
                </IconButton>
                <IconButton>
                  {isPlaying ? <PauseIcon fontSize = {'large'}/> : <PlayArrowIcon fontSize = {'large'}/>}
                </IconButton>
                <IconButton>
                  <SkipNextIcon fontSize = {'large'}/>
                </IconButton>
              </Box>

              <Box>
                <IconButton onClick={()=>console.log("sup")}>
                  <VolumeUp/>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Paper>

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
                    setSongTitle(song.title)
                  }}
                >
                  {isPlaying & currentSong === song.src ? <PauseCircleIcon/> : <PlayCircleIcon/>}
                </IconButton>
              </Box>

              <Typography variant = "body2">
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
