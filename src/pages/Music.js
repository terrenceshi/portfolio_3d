import { useState, useRef, useEffect } from 'react';

import MusicData from '../data/MusicData.js';
import Player from '../components/Player.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

function Music({screenSize, setSceneNumber}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(MusicData[0]);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0)

  const audioElem = useRef();

  useEffect(() => {
    setSceneNumber(4);
  }, []);

  useEffect(() => {
    if(mute){
      audioElem.current.volume = 0;
    } else {
      audioElem.current.volume = volume;
    }

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
        width: {sm: 600, xs: 400},
        pt: "8.75vh"
      }}
      >
        <audio 
          src={currentSong.src}
          ref={audioElem}
          onEnded={() => {
            setIsPlaying(false); 
            setCurrentSong(MusicData[currentSong.index + 1 >= MusicData.length ? 0 : currentSong.index + 1]);
          }}
          onTimeUpdate={() => setCurrentTime(audioElem.current.currentTime)}
        />

        <Player
          audioElem = {audioElem}
          currentSong = {currentSong}
          setCurrentSong = {setCurrentSong}
          isPlaying = {isPlaying}
          setIsPlaying = {setIsPlaying}
          mute = {mute}
          setMute = {setMute}
          volume = {volume}
          setVolume = {setVolume}
          currentTime = {currentTime}
          screenSize = {screenSize}
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
              <Box sx = {{px: 1}}>
                <IconButton 
                  sx={{ "&:hover": { backgroundColor: "transparent" }}}
                  onClick={() => {
                    setIsPlaying(currentSong === song ? !isPlaying : true);
                    setCurrentSong(song);
                  }}
                >
                  {isPlaying & currentSong === song ? <PauseCircleIcon/> : <PlayCircleIcon/>}
                </IconButton>
              </Box>

              <Typography variant = "body2">
                {song.title}
              </Typography>
            </Box>
            {idx !== MusicData.length - 1 ? <Divider/> : <div/>}
          </Box>
        ))}
      </Box>
    </Fade>
  );
}

export default Music;
