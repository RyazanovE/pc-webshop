import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    redHeader: string;
    white: string;
    vanile: string;
    darkGray: string;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    sms: true
  }

  interface ThemeOptions {
    mY: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

