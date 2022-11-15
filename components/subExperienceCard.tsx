import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import sectionStyles from '../styles/section.module.css';
import experience from '../styles/experiences.module.css';

type SubExperienceProps = {
  phases: {
    id: number,
    icon: JSX.Element,
    summary: JSX.Element,
    years: string
  }[]
}

const SubExperienceCard = ({ phases }: SubExperienceProps) => {
  return (
    <Box>
      {phases.map(({id, icon, summary, years}, index) => (
        <Box key={id}>
          <Card className={`${experience.card} ${sectionStyles.light}`}>
            <CardContent className={experience.cardContent}>
              <Box className={experience.icon}>{icon}</Box>
              <Box className={experience.right}>
                <Typography className={experience.years} color="text.secondary">
                  {years}
                </Typography>
                <Box className={experience.description}>
                  {summary}
                </Box>
              </Box>
            </CardContent>
          </Card>
          {(index < phases.length-1) && <Box className={experience.halfTimeline}></Box>}
        </Box>
      ))}
    </Box>
  );
}

export default SubExperienceCard;
