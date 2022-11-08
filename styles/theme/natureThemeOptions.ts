import { ThemeOptions } from '@mui/material/styles';

const natureThemeOptions: ThemeOptions = {
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
    }
  }
};

export default natureThemeOptions;