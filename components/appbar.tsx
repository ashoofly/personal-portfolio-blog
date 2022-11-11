import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar sx={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            bgcolor: '#a2bf97',
            color: '#f7f1da',
          }}
        >
          <Button><Link href="/#">About</Link></Button>
          <Button><Link href="/#projects">Projects</Link></Button>
          <Button><Link href="/#experience">Experience</Link></Button>
          <Button><Link href="/blog">Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
