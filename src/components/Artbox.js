import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ArtBox = ({ artDict }) => {
    return (
        <div className = "artBox">
            <img src={artDict.images[0]} style = {{width: 300, height: 300, objectFit: "cover"}}/>
            
        </div>
    )
}
export default ArtBox;