import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

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
    <Box
      sx={{
        display: 'flex',
        listStyle: 'none',
        gap: '5px',
        paddingLeft: '0',
        m: 0,
      }}
      component="ul"
    >
      {skills.map((skill) => {
        return (
          <ListItem key={skill.text}>
            <Chip
              label={skill.text}
              sx={{
                // backgroundColor: skill.color,
                backgroundColor: "primary.dark",
                color: skill.color,
                border: `2px solid ${skill.color}`,
                fontWeight: 'bold',
                fontSize: '0.9rem',
                borderRadius: '6px'
              }}
              // color={skill.color}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
