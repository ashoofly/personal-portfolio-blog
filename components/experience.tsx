import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

interface ExperienceProps {
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

const Experience = ({ content }: ExperienceProps) => {
  const { id, icon, title, years, location, duration = 'N/A', description } = content;
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardContent sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gridColumn: '2 / 2',
        }}>{icon}</Box>
        <Box sx={ (id % 2 === 0) ? { gridColumn: '3 / 3', gridRow: '1 / 1' } : { gridColumn: '1 / 1', gridRow: '1 / 1', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
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

export default Experience;
