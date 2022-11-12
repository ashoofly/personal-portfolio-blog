import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import styles from '../styles/appbar.module.css';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar className={styles.toolbar}>
          <Button><Link className={styles.link} href="/#">About</Link></Button>
          <Button><Link className={styles.link} href="/#projects">Projects</Link></Button>
          <Button><Link className={styles.link} href="/#experience">Experience</Link></Button>
          <Button><Link className={styles.link} href="/blog">Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
