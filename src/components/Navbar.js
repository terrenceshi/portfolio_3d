import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

import { Link } from "react-router-dom";

const pages = ['Art','CS','Music'];

function Navbar () {

  return (
    <Box sx = {{display: 'flex', gap: 1, p: 2}}>

      <IconButton>
        <HomeIcon />
      </IconButton>
      
      {pages.map((page) => (
        <Button variant="text" key = {page} sx = {{color: 'white'}}>{page}</Button>
      ))}
    </Box>
  );
};
export default Navbar;