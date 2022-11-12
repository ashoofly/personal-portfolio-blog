import '../styles/global.css'
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import portfolioThemeOptions from '../styles/theme/portfolioThemeOptions';
import createEmotionCache from "../styles/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Layout from '../components/layouts/layout';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

const clientSideEmotionCache = createEmotionCache();
const portfolioTheme = createTheme(portfolioThemeOptions);

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={portfolioTheme}>
        {/* <CssVarsProvider> */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </CssVarsProvider> */}
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};