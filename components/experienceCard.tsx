import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import sectionStyles from '../styles/section.module.css';

type ExperienceProps = {
  content: {
    id: number,
    icon: JSX.Element,
    title: string,
    years: string,
    location: string,
    duration?: string,
    description: string,
  }
}

const ExperienceCard = ({ content }: ExperienceProps) => {
  const { id, icon, title, years, location, duration = 'N/A', description } = content;
  return (
    <Card sx={{ boxShadow: 'none' }} className={sectionStyles.light}>
      <CardContent sx={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 2.5fr', justifyItems: 'center', gap: '15px' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gridColumn: '2 / 2',
          // maxWidth: '200px',
        }}>{icon}</Box>

        <Box sx={ (id % 2 === 0) ? { gridColumn: '3 / 3', gridRow: '1 / 1', maxWidth: '400px', justifySelf: 'left' } : { gridColumn: '1 / 1', gridRow: '1 / 1', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', maxWidth: '400px', justifySelf: 'right' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {years}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {location}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
