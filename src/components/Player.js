import MusicData from '../data/MusicData.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Fade from '@mui/material/Fade';

function convertToTimeStamp(ct){
    var minutes = Math.floor(ct / 60);
    var seconds = ct - minutes * 60;
    seconds = Math.round(seconds)
    seconds = (seconds < 10) ? '0' + seconds.toString() : seconds.toString();
    const timeStamp = minutes.toString() + ':' + seconds.toString();

    return timeStamp;
}

function convertToSeconds(stamp){
    var minutes = parseInt(stamp.slice(0,1));
    var seconds = parseInt(stamp.slice(2,4));
    
    return seconds + minutes * 60;
}

function Player({currentSong, setCurrentSong, audioPlaying, setAudioPlaying, mute, setMute, volume, setVolume, currentTime, audioElem}) {
  return(
    <Fade 
      in={true}
      timeout={{ enter: 1500 }}
      style={{ transitionDelay: '1750ms' }}
    >
      <Paper 
        elevation={0}
        sx = {{
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(15px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: "fixed", 
          bottom: 0, 
          width: "100%", 
          zIndex: 1001
      }}>
        <Box sx = {{
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 2, 
          p: {sm: 3, xs: 2},
          width: {sm: 600, xs: 400}
        }}>
          <Typography variant = "body2">
            {currentSong.title}
          </Typography>

          <Box sx = {{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Typography variant = "body2">
              {convertToTimeStamp(currentTime)}
            </Typography>
            <Slider 
              size="small" 
              value = {(currentTime / convertToSeconds(currentSong.duration)) * 100}
              onChange = {(event, newValue) => {
                  audioElem.current.currentTime = (newValue / 100) * audioElem.current.duration;
              }}
              sx = {{width: {sm: 300, xs: 140}}}
          />
            <Typography variant = "body2">
              {currentSong.duration}
            </Typography>
          </Box>
          
          <Box sx = {{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly'}}>
            <Box sx = {{width: {sm: 119, xs: 80}, height: {sm: 44, xs: 40}}}/>

            <Box sx = {{display: 'flex', flexDirection: 'row', gap: 1}}>
              <IconButton onClick={()=>setCurrentSong(MusicData[currentSong.index - 1 < 0 ? MusicData.length - 1 : currentSong.index - 1])}>
                  <SkipPreviousIcon sx = {{fontSize: {sm: 48, xs: 36}}}/>
              </IconButton>
              <IconButton onClick={()=>setAudioPlaying(!audioPlaying)}>
                  {audioPlaying ? 
                    <PauseIcon sx = {{fontSize: {sm: 48, xs: 36}}}/> : 
                    <PlayArrowIcon sx = {{fontSize: {sm: 48, xs: 36}}}/>
                  }
              </IconButton>
              <IconButton onClick={()=>setCurrentSong(MusicData[currentSong.index + 1 >= MusicData.length ? 0 : currentSong.index + 1])}>
                  <SkipNextIcon sx = {{fontSize: {sm: 48, xs: 36}}}/>
              </IconButton>
            </Box>

            <Box sx = {{display: 'flex', flexDirection: 'row',alignItems: 'center', gap: 0}}>
              <IconButton onClick = {() => setMute(!mute)}>
                {mute || volume === 0 ? 
                  <VolumeOffIcon sx = {{fontSize: {sm: 28, xs: 24}}}/> : 
                  <VolumeUp sx = {{fontSize: {sm: 28, xs: 24}}}/>
                }
              </IconButton>
              <Slider 
                  value = {volume * 100}
                  onChange = {(event, newValue) => setVolume(newValue / 100)}
                  sx = {{
                      width: {sm: 75, xs: 40},
                      '& .MuiSlider-thumb': {
                          height: {sm: 14, xs: 12},
                          width: {sm: 14, xs: 12}
                      }
              }}/>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
}

export default Player;