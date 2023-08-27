import { useState, useEffect } from 'react';

import ArtData from '../data/ArtData.js';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ArtBox = ({ artDict, idx, setThumbnailsLoaded, thumbnailLoadLst }) => {
    var numArtLoaded = 0;
    const [artLoaded, setArtLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const [sliderX, setSliderX] = useState(0);
    
    let imgLst = artDict.images;
    let maxSliderX = (artDict.images.length - 1) * -100;

    return (
        <div className = "artBox">
            <img 
                src={artDict.images[0]} 
                alt = {artDict.title} 
                style = {{
                    width: 300, 
                    height: 300, 
                    objectFit: "cover", 
                    cursor: "pointer"
                }}
                onClick={() => {setSliderX(0); setOpen(true)}}
                onLoad={() => {
                    thumbnailLoadLst[idx] = 1;

                    var sum = thumbnailLoadLst.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    },0);

                    if(sum >= ArtData.length){
                        setThumbnailsLoaded(true);
                    }
                }}
            />

            <Dialog
                open={open}
                onClose={() => {setOpen(false)}}
                maxWidth = {false}
            >
                <Box sx = {{display: "flex", flexDirection: "row"}}>
                    <Box sx = {{
                        display: "flex",
                        flexDirection: "row",
                        gap: 0,
                        width: 700,
                        overflow: "hidden"
                    }}>
                        {imgLst.map((imgSrc,index)=>{
                            return(
                                <img 
                                    src = {imgSrc} 
                                    key = {index}
                                    onLoad = {() => {
                                        numArtLoaded += 1;
                                        if(numArtLoaded >= imgLst.length){
                                            setArtLoaded(true);
                                        }
                                    }}
                                    style = {{
                                        minWidth: 700,
                                        transform: `translateX(${sliderX}%)`, 
                                        transition: "0.75s"
                                    }}
                                />
                            )
                        })
                        }
                    </Box>
                    <Box sx = {{
                        display: "flex", 
                        flexDirection: "column", 
                        p: 4,
                        pt: 3,
                        width: 300, 
                        justifyContent: 'space-between'
                    }}>
                        <Box sx = {{display: "flex", flexDirection: "column", gap: 1}}>
                            <Typography variant = "h5">{artDict.title}</Typography>
                            <Typography variant = "body2" color = "text.secondary">{artDict.year}</Typography>
                            <Typography variant = "body">{artDict.description}</Typography>
                        </Box>

                        <Box sx = {{
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: 'space-between'
                        }}>
                            <IconButton 
                                onClick={() => setSliderX(sliderX + 100)}
                                disabled={sliderX === 0}
                            >
                                <ArrowLeftIcon/>
                            </IconButton>
                            
                            <IconButton
                                onClick={() => setSliderX(sliderX - 100)}
                                disabled = {sliderX === maxSliderX}
                            >
                                <ArrowRightIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </div>
    )
}
export default ArtBox;