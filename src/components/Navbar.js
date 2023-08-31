import * as React from 'react';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <Box>
      <Box sx = {{
        display: {sm: 'flex', xs: 'none'}, 
        gap: 1, 
        p: 2,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <IconButton
          component = {Link}
          to = {'/'}
        >
          <HomeIcon/>
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
        >
          <MenuItem onClick={() => setAnchorEl(null)}>
            <Typography variant = "body2">
              <Link style = {{textDecoration: "none", color: "white"}} to = {'/'}>
                Home
              </Link>
            </Typography>
          </MenuItem>

          {pages.map((page) => (
            <MenuItem key={page} onClick={() => setAnchorEl(null)}>
              <Typography variant = "body2">
                <Link style = {{textDecoration: "none", color: "white"}} to = {`/${page}`}>
                  {page}
                </Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};
export default Navbar;