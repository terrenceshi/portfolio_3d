import { useState } from 'react';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ArtBox = ({ artDict }) => {
    const [open, setOpen] = useState(false);

    const [sliderX, setSliderX] = useState(0);

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
                onClick={() => setOpen(true)}
            />

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx = {{display: "flex", flexDirection: "row"}}>
                    <Box sx = {{
                        display: "flex",
                        flexDirection: "row",
                        gap: 0,
                        overflow: "hidden"
                    }}>
                        {artDict.images.map((imgSrc,index)=>{
                            return(
                                <div
                                    key = {index} 
                                    style = {{transform: `translateX(${sliderX}%)`, transition: "0.75s"}}
                                >
                                    <img src = {imgSrc}/>
                                </div>
                            )
                        })
                        }
                    </Box>
                    <Box>
                        <IconButton onClick={() => setSliderX(sliderX + 100)}>
                            <ArrowLeftIcon/>
                        </IconButton>
                        
                        <IconButton onClick={() => setSliderX(sliderX - 100)}>
                            <ArrowRightIcon/>
                        </IconButton>

                    </Box>
                    
                </Box>
            </Dialog>
            
        </div>
    )
}
export default ArtBox;