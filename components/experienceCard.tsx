import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import sectionStyles from '../styles/section.module.css';
import experience from '../styles/experiences.module.css';

type ExperienceProps = {
  content: {
    id: number,
    icon: JSX.Element,
    title: string,
    years: string,
    location: string,
    duration?: string,
    description?: JSX.Element,
    phases?: {
      icon: JSX.Element,
      summary: JSX.Element
    }[]
  }
}

const ExperienceCard = ({ content }: ExperienceProps) => {
  const { id, icon, title, years, location, description } = content;
  return (
    <Card className={`${experience.card} ${sectionStyles.light}`}>
      <CardContent className={experience.cardContent}>
        <Box className={experience.icon}>{icon}</Box>
        <Box className={(id % 2 === 0) ? experience.right : experience.left}>
          <Typography className={experience.years} color="text.secondary" gutterBottom>
            {years}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography className={experience.location} color="text.secondary">
            {location}
          </Typography>
          {description && <Box className={experience.description}>
            {description}
          </Box>}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
