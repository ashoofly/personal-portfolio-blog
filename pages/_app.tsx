import '../styles/global.css'
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import natureThemeOptions from '../styles/theme/natureThemeOptions';
import createEmotionCache from "../styles/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Layout from '../components/layout';

const clientSideEmotionCache = createEmotionCache();
const natureTheme = createTheme(natureThemeOptions);

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={natureTheme}>
        <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};