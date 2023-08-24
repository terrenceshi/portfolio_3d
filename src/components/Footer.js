import './Footer.css';

import Box from '@mui/material/Box';

function Footer () {

  return (
    <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

        <Box sx = {{
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center", 
            justifyCenter: "center", 
            gap: 8
        }}>
            <a href="https://github.com/terrenceshi/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github fa-4x icon-3d" style = {{fontSize : 80}}></i>
            </a>
            <a href="https://www.instagram.com/tshi_xd/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram fa-4x icon-3d" style = {{fontSize : 80}}></i>
            </a>
            <a href="https://www.linkedin.com/in/tshi/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin fa-4x icon-3d" style = {{fontSize : 80}}></i>
            </a>
            
        </Box>
    </div>
  );
};
export default Footer;