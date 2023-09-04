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

function Music({setSceneNumber, audioPlaying, setAudioPlaying}) {
  const [currentSong, setCurrentSong] = useState(MusicData[0]);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0)
  const [readyToPlay, setReadyToPlay] = useState(false);

  const audioElem = useRef();

  useEffect(() => {
    setAudioPlaying(false)
    setReadyToPlay(true);
    setSceneNumber(4);
  }, []);

  useEffect(() => {
    if(mute){
      audioElem.current.volume = 0;
    } else {
      audioElem.current.volume = volume;
    }

    if(readyToPlay){
      if (audioPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  })

  return (
    <Box sx = {{
        display: 'flex', 
        flexDirection: "column", 
        width: "100%",
        pt: "8.75vh",
        pb: 25,
        alignItems: 'center'
    }}
    >
      <audio 
        src={currentSong.src}
        ref={audioElem}
        onEnded={() => {
          setAudioPlaying(false); 
          setCurrentSong(MusicData[currentSong.index + 1 >= MusicData.length ? 0 : currentSong.index + 1]);
        }}
        onTimeUpdate={() => setCurrentTime(audioElem.current.currentTime)}
      />

      <Player
        audioElem = {audioElem}
        currentSong = {currentSong}
        setCurrentSong = {setCurrentSong}
        audioPlaying = {audioPlaying}
        setAudioPlaying = {setAudioPlaying}
        mute = {mute}
        setMute = {setMute}
        volume = {volume}
        setVolume = {setVolume}
        currentTime = {currentTime}
      />

      <Fade 
        in={true}
        timeout={{ enter: 1500 }}
        style={{ transitionDelay: '1750ms' }}
      >
        <Box sx = {{
          pt: 1,
          width: {sm: 600, xs: 400}
        }}>
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
                      setAudioPlaying(currentSong === song ? !audioPlaying : true);
                      setCurrentSong(song);
                    }}
                  >
                    {audioPlaying & currentSong === song ? <PauseCircleIcon/> : <PlayCircleIcon/>}
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
    </Box>
  );
}

export default Music;
