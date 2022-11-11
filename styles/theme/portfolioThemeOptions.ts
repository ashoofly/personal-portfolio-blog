import { ThemeOptions } from '@mui/material/styles';

const portfolioThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      'IBM Plex Sans JP',
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
  // palette: {
  //   primary: {
  //     main: "#a2bf97",
  //   },
  // },
  components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       colorPrimary: {
  //         color: "#f7f1da"
  //       }
  //     }
  //   },
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
  }
};

export default portfolioThemeOptions;