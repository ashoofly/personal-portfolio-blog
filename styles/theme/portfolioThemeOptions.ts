import { ThemeOptions } from '@mui/material/styles';

const portfolioThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      'Roboto',
      'Noto Serif'
    ].join(','),
    h1: {
    
    },
    h2: {
      fontFamily: 'Noto Serif'

    },
    h3: {
      fontFamily: 'Noto Serif'

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
      fontFamily: 'Noto Serif'
    },
    body2: {
      fontFamily: 'Noto Serif'
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