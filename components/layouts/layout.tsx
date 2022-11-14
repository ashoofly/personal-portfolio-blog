import Head from 'next/head';
import ButtonAppBar from '../appbar';
import { Container, Toolbar } from '@mui/material';
import utilStyles from '../../styles/utils.module.css';
import footerStyles from '../../styles/footer.module.css';

export const siteTitle = 'Angela Hsu';

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean,
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <Container className={utilStyles.container}>
      <ButtonAppBar />
      <Toolbar />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <footer className={footerStyles.footer}>
        <p className={footerStyles.footerContent}>&copy; 2022 Angela Hsu</p>
      </footer>  
    </Container>
  );
}