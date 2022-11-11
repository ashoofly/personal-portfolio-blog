import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

type ProjectCardProps = {
  details: {
    id: number,
    title: string,
    subtitle: string,
    image: string,
    demo: string,
    source: string,
    tech: string[],
    description: string
  }
}

export default function ProjectCard(props: ProjectCardProps) {
  const { id, title, subtitle, image, demo, source, tech, description } = props.details;
  return(
    <Box sx={{
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr 6fr 1fr',
      gap: '50px'
    }}>
      <Box>
        <Image
          priority
          src={image}
          height={100}
          width={100}
          layout="responsive"
          alt=""
          style={{ borderRadius: '50px' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '900px'}}>
        <Typography variant="h4" >
          <b>{title}</b>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <b>{subtitle}</b>
        </Typography>
        <Typography variant="h6">
          <b>Tech: </b>{tech.map(t => `${t}, `)}
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', 'alignItems': 'center'}}>
          <Box sx={{ display: 'flex', gap: '5px', 'alignItems': 'center'}}>
            <Typography variant="subtitle2">
              <b>Demo:</b>
            </Typography>
            {demo.startsWith('http') ? 
              <Link color="text.secondary" href={demo} sx={{ display: 'flex', alignItems: 'center'}}><PublicIcon /></Link> : 
              <Typography variant="subtitle2">{demo}</Typography>}            
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', 'alignItems': 'center'}}>
            <Typography variant="subtitle2">
            <b>Source:</b>
            </Typography>
            <Link color="text.secondary" href={source} sx={{ display: 'flex', alignItems: 'center'}}><GitHubIcon /></Link>
          </Box>
        </Box>
        <Typography variant="body1">
          {description}
        </Typography>

      </Box>

    </Box>
  );
}