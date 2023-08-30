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

function Player({currentSong, setCurrentSong, isPlaying, setIsPlaying, mute, setMute, volume, setVolume, currentTime, audioElem}) {
    return(
        <Paper elevation={0}>
          <Box sx = {{display: 'flex',flexDirection: 'column', alignItems: 'center', gap: 2, p: 2}}>
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
                sx = {{width: 300}}
            />
              <Typography variant = "body2">
                {currentSong.duration}
              </Typography>
            </Box>
            
            <Box sx = {{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly'}}>
              <Box sx = {{width: 129.84, height: 46.84}}/>

              <Box sx = {{display: 'flex', flexDirection: 'row', gap: 1}}>
                <IconButton onClick={()=>setCurrentSong(MusicData[currentSong.index - 1 < 0 ? MusicData.length - 1 : currentSong.index - 1])}>
                    <SkipPreviousIcon fontSize = {'large'}/>
                </IconButton>
                <IconButton onClick={()=>setIsPlaying(!isPlaying)}>
                    {isPlaying ? <PauseIcon fontSize = {'large'}/> : <PlayArrowIcon fontSize = {'large'}/>}
                </IconButton>
                <IconButton onClick={()=>setCurrentSong(MusicData[currentSong.index + 1 >= MusicData.length ? 0 : currentSong.index + 1])}>
                    <SkipNextIcon fontSize = {'large'}/>
                </IconButton>
              </Box>

              <Box sx = {{display: 'flex', flexDirection: 'row',alignItems: 'center', gap: 1}}>
                <IconButton onClick = {() => setMute(!mute)}>
                  {mute ? <VolumeOffIcon/> : <VolumeUp/>}
                </IconButton>
                <Slider 
                    value = {volume * 100}
                    onChange = {(event, newValue) => setVolume(newValue / 100)}
                    sx = {{
                        width: 75,
                        '& .MuiSlider-thumb': {
                            height: 14,
                            width: 14
                        }
                }}/>
              </Box>
            </Box>
          </Box>
        </Paper>
    );
}

export default Player;