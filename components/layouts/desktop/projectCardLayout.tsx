import { Box, Typography, Link } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import BadgeArray from '../../badgeArray';
import project from '../../../styles/projects.module.css';
import utils from '../../../styles/utils.module.css';

type ProjectCardProps = {
  details: {
    id: string,
    title: string,
    subtitle: string,
    dates: string,
    image: StaticImageData,
    additionalImages?: StaticImageData[],
    demo: string,
    source: string,
    imageCredit?: string,
    skills: {
      color: string,
      text: string,
    }[],
    description: JSX.Element
  }
}

export default function DesktopProjectCard(props: ProjectCardProps) {
  const { title, subtitle, dates, image, demo, source, skills, description, imageCredit, additionalImages, id } = props.details;
  return(
    <Box id={id} className={project.card}>
      <figure className={project.figures}>
        <Image
          src={image}
          alt=""
          className={`${project.icon}`}
        />
        {imageCredit && <figcaption className={utils.figcaption} dangerouslySetInnerHTML={{__html: imageCredit}} />}
      </figure>
      <Box className={project.padding}>
        <header>
          <Typography variant="h6" color="primary.contrastText">
            <b>{title}</b>
          </Typography>
          <Typography color="secondary.main">
            <b>{subtitle}</b>
          </Typography>
          <Typography variant="subtitle1" className={project.dates}>
            {dates}
          </Typography>
        </header>
        <Box className={project.figures}>
          <Typography variant="h6">
            <BadgeArray skills={skills} />
          </Typography>
        </Box>
        <Box className={project.details}>
          <Box className={project.links}>
            <Box className={project.link}>
              <Typography variant="subtitle2">
                <b>Demo:</b>
              </Typography>
              {demo.startsWith('http') ? 
                <Link color="text.secondary" href={demo} className={project.link} target="_blank" rel="noopener">
                  <PublicIcon color="primary" />
                </Link> 
                  : 
                <Typography variant="subtitle2" color="primary">{demo}</Typography>}            
            </Box>
            <Box className={project.link}>
              <Typography variant="subtitle2">
              <b>Source:</b>
              </Typography>
              <Link color="text.secondary" href={source} className={project.link} target="_blank" rel="noopener">
                <GitHubIcon color="primary" />
              </Link>
            </Box>
          </Box>
          {description}
        </Box>
      </Box>
    </Box>
  );
}