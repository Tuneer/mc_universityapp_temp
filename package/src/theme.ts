import { Tinos,Montserrat } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const TinosFont = Tinos({
  style: 'normal',
  weight: ['400'],
  subsets: ['greek'],
  display: 'swap',
  fallback: [''],
});

export const MontserratFont = Montserrat({
  style: 'normal',
  weight: ['400'],
  subsets: ['vietnamese'],
  display: 'swap',
  fallback: [''],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    // fontFamily: TinosFont.style.fontFamily,
  },
});

export default theme;
