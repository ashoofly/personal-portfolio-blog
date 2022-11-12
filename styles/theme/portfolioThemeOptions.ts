import { ThemeOptions } from '@mui/material/styles';

const portfolioThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      'IBM Plex Sans JP',
      'sans-serif',
      'Noto Serif'
    ].join(','),
    h1: {
    
    },
    h2_serif: {
      fontFamily: 'Noto Serif'

    },
    h2: {
    },
    h3: {

    },
    h4: {

    },
    h5: {

    },
    h6: {

    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {

    },
    body1: {
    },
    body2: {
    },
    button: {
    },
    caption: {

    },
    overline: {

    }
  },
  palette: {
    primary: {
      main: "#79A8A9",
      contrastText: '#fff8e1',
      dark: '#263238',
      light: '#FECD70'
    },
  },
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    // MuiTypography: {
    //   defaultProps: {
    //     variantMapping: {
    //       h2: 'h1',
    //     },
    //   },
    // },
    //   MuiAppBar: {
    //     styleOverrides: {
    //       colorPrimary: {
    //         color: "#f7f1da"
    //       }
    //     }
    //   },
  }
};

export default portfolioThemeOptions;