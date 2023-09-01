import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

const pages = ['About', 'Art','CS','Music'];

function Navbar () {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Box>
      <Box sx = {{
        display: {sm: 'flex', xs: 'none'}, 
        gap: 1, 
        p: 2,
        pt: 3,
        flexDirection: 'row',
        alignItems: 'center',
        /*borderRadius: 2,
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(20px)' */
      }}>
        <IconButton
          component = {Link}
          to = {'/'}
        >
          <HomeIcon />
        </IconButton>

        {pages.map((page) => (
          <Button
            variant="text"
            component = {Link}
            to = {`/${page}`}
            key = {page}
            sx = {{color: 'white'}}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx = {{display: {sm: 'none', xs: 'flex'}, p: 2}}>
        <IconButton onClick = {(event) => {setAnchorEl(event.currentTarget)}}>
          <MenuIcon/>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => {setAnchorEl(null)}}
          sx = {{".MuiMenu-list": { py: 0 }}}
        >
          <Link style = {{textDecoration: "none", color: "white"}} to = {'/'}>
            <Box sx = {{pt: 1}} onClick={() => setAnchorEl(null)}>
              <MenuItem>
                <Typography variant = "body2">
                    Home
                </Typography>
              </MenuItem>
            </Box>
          </Link>

          {pages.map((page, idx) => (
            <Link style = {{textDecoration: "none", color: "white"}} to = {`/${page}`} key={page}>
              <Box sx = {{pb: idx === pages.length - 1 ? 1 : 0}} onClick={() => setAnchorEl(null)}>
                <MenuItem>
                  <Typography variant = "body2">
                      {page}
                  </Typography>
                </MenuItem>
              </Box>
            </Link>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};
export default Navbar;