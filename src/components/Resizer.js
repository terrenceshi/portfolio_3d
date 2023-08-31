import { useState, useEffect } from 'react';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function GetScreenSize() {
  const [ screenSize, setScreenSize ] = useState('md');

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const lg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    function handleResize() {
      if (xs) {
        setScreenSize('xs');
      } else if (sm) {
        setScreenSize('sm');
      } else if (md) {
        setScreenSize('md');
      } else if (lg) {
        setScreenSize('lg');
      } else if (xl) {
        setScreenSize('xl');
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}