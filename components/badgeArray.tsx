import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import badges from '../styles/badgeArray.module.css';

type BadgeArrayProps = {
  skills: {
    color: string,
    text: string,
  }[],
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function BadgeArray({ skills }: BadgeArrayProps) {
  return (
    <Box className={badges.container}>
      <List className={badges.list}>
        {skills.map((skill) => {
          return (
            <ListItem key={skill.text} className={badges.listItem}>
              <Chip
                className={badges.chip}
                label={skill.text}
                sx={{
                  color: skill.color,
                  border: `2px solid ${skill.color}`,
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
