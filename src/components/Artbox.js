import './Artbox.css';

import { useState } from 'react';

import ArtData from '../data/ArtData.js';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material';

var numArtLoaded = 0;

const MuiImg = styled("img")({});

function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
        result[key] = mapFn(object[key])
        return result
    }, {})
}

const ArtBox = ({ artDict, idx, setThumbnailsLoaded, thumbnailLoadLst }) => {
    const [artLoaded, setArtLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const [sliderX, setSliderX] = useState(0);
    
    let imgLst = artDict.images;
    let maxSliderX = (artDict.images.length - 1) * -100;

    const dialogImgSize = {lg: 550, md: 525, sm: 525, xs: 320};

    return (
        <Box sx = {{display: "flex"}}>
            <MuiImg 
                className = "art_img"
                src={artDict.images[0]} 
                alt = {artDict.title} 
                sx = {{
                    width: {lg: 300, md: 250, sm: 190, xs: 300},
                    height: {lg: 300, md: 250, sm: 190, xs: 300},
                    objectFit: 'cover',
                    cursor: "pointer"
                }}
                onClick={() => {setSliderX(0); setArtLoaded(false); setOpen(true)}}
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
                <Box sx = {{
                    display: "flex", 
                    flexDirection: {md: "row", sm: 'column', xs: 'column'}
                }}>
                    <Fade 
                    in={artLoaded}
                    timeout={{ enter: 1500 }}
                    >
                        <Box sx = {{
                            display: artLoaded ? "flex" : "none",
                            flexDirection: "row",
                            gap: 0,
                            width: dialogImgSize,
                            overflow: "hidden"
                        }}>
                            {imgLst.map((imgSrc,index)=>{
                                return(
                                    <MuiImg 
                                        src = {imgSrc} 
                                        key = {index}
                                        onLoad = {() => {
                                            numArtLoaded += 1;
                                            if(numArtLoaded >= imgLst.length){
                                                setArtLoaded(true);
                                            }
                                        }}
                                        sx = {{
                                            minWidth: dialogImgSize,
                                            transform: `translateX(${sliderX}%)`, 
                                            transition: "0.75s"
                                        }}
                                    />
                                )
                            })
                            }
                        </Box>
                    </Fade>
                    <Box sx = {{
                        display: artLoaded ? "none" : "flex"
                    }}>
                        <Skeleton 
                            variant="rectangular" 
                            sx = {{
                                width: dialogImgSize,
                                height: objectMap(dialogImgSize, (value) => {
                                    return (artDict.height / artDict.width) * value;
                                })
                            }}
                        />
                    </Box>
                    <Box sx = {{
                        display: "flex", 
                        flexDirection: "column", 
                        p: {sm: 4, xs: 3},
                        pt: {sm: 3, xs: 2},
                        width: {md: 300, sm: "100%", xs: "100%"}, 
                        justifyContent: 'space-between',
                        gap: 1
                    }}>
                        <Box sx = {{display: "flex", flexDirection: "column", gap: 1}}>
                            <Typography sx={{ typography: { sm: 'h5', xs: 'h6' } }}>
                                {artDict.title}
                            </Typography>
                            <Typography 
                                variant = "body2" 
                                color = "text.secondary" 
                                sx = {{
                                    display: {md: 'block', sm: 'none', xs: 'none'},
                            }}>
                                {artDict.year}
                            </Typography>
                            <Typography sx = {{
                                display: {md: 'block', sm: 'none', xs: 'none'},
                                typography: {lg: "body1", md: "body2"}
                            }}>
                                {artDict.description}
                            </Typography>
                        </Box>

                        <Box sx = {{
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: 'space-between'
                        }}>
                            <IconButton 
                                onClick={() => setSliderX(sliderX + 100)}
                                disabled={sliderX === 0 || !artLoaded}
                            >
                                <ArrowLeftIcon/>
                            </IconButton>
                            
                            <IconButton
                                onClick={() => setSliderX(sliderX - 100)}
                                disabled = {sliderX === maxSliderX || !artLoaded}
                            >
                                <ArrowRightIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    )
}
export default ArtBox;