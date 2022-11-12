import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import BadgeArray from './badgeArray';
import project from '../styles/projects.module.css';

import utils from '../styles/utils.module.css';

type ProjectCardProps = {
  details: {
    id: number,
    title: string,
    subtitle: string,
    image: string,
    demo: string,
    source: string,
    creditText?: string,
    creditUrl?: string,
    skills: {
      color: string,
      text: string,
    }[],
    description: string
  }
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, subtitle, image, demo, source, skills, description, creditText, creditUrl } = props.details;
  return(
    <Box className={project.card}>
      <Box>
        <Image
          src={image}
          alt=""
          className={project.icon}
        />
        {creditUrl && <figcaption className={utils.figcaption}>
          Image by <Link href={creditUrl}>{creditText}</Link></figcaption>}
      </Box>
      <Box className={project.details}>
        <Typography variant="h6" color="primary.contrastText">
          <b>{title}</b>
        </Typography>
        <Typography color="secondary.main">
          <b>{subtitle}</b>
        </Typography>
        <Typography variant="h6">
          <BadgeArray skills={skills} />
        </Typography>
        <Box className={project.links}>
          <Box className={project.link}>
            <Typography variant="subtitle2">
              <b>Demo:</b>
            </Typography>
            {demo.startsWith('http') ? 
              <Link color="text.secondary" href={demo} className={project.link}>
                <PublicIcon color="primary" />
              </Link> 
                : 
              <Typography variant="subtitle2" color="primary">{demo}</Typography>}            
          </Box>
          <Box className={project.link}>
            <Typography variant="subtitle2">
            <b>Source:</b>
            </Typography>
            <Link color="text.secondary" href={source} className={project.link}>
              <GitHubIcon color="primary" />
            </Link>
          </Box>
        </Box>
        <Typography variant="body1">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}