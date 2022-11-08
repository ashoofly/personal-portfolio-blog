import '../styles/global.css'
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import natureThemeOptions from '../styles/theme/natureThemeOptions';
import createEmotionCache from "../styles/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const natureTheme = createTheme(natureThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={natureTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;