import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import styles from '../styles/appbar.module.css';

export default function ButtonAppBar() {
  const smoothScrollTo = (anchorTag) => {
    const element = document.querySelector(anchorTag);
    // if on index page, smooth scroll
    if (element) {
      const appbarHeight = document.getElementById('appbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - appbarHeight;
      window.scrollTo({ 
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <Box>
      <AppBar position="fixed" id="appbar">
        <Toolbar className={styles.toolbar}>
          <Button><Link className={styles.link} onClick={() => smoothScrollTo('#about')} href="/#about">About</Link></Button>
          <Button><Link className={styles.link} onClick={() => smoothScrollTo('#projects')} href="/#projects">Projects</Link></Button>
          <Button><Link className={styles.link} onClick={() => smoothScrollTo('#experience')} href="/#experience">Experience</Link></Button>
          <Button><Link className={styles.link} href="/blog">Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
