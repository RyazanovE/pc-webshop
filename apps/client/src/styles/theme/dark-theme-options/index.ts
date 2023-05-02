import { ThemeOptions } from '@mui/material/styles';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    redHeader: "#ff497c",
    white: "white",
    vanile: "#f9f3f0",
    darkGray: "#121212"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      sms: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  },
  mY: {
    small: "4px",
    medium: "8px",
    large: "16px",
  }
};

export default darkThemeOptions;