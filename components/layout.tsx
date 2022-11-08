import Head from 'next/head';
import ButtonAppBar from './appbar';
import Toolbar from '@mui/material/Toolbar';
import sectionStyles from '../styles/section.module.css';

export const siteTitle = 'Angela Hsu';

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean,
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <ButtonAppBar />
      <Toolbar />
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      <footer className={`${sectionStyles.footer} ${sectionStyles.dark}`}>
        <p className={sectionStyles.footerContent}>&copy; 2022 Angela Hsu</p>
      </footer>  
    </>
  );
}