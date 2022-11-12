import Image from 'next/image';
import { Box, Typography, Container } from '@mui/material';

import indexStyles from '../../styles/index.module.css';
import sectionStyles from '../../styles/section.module.css';
import utilStyles from '../../styles/utils.module.css';
import projects from '../../styles/projects.module.css';
import Link from '@mui/material/Link';

import ProjectCard from '../projectCard';
import { orange, lightBlue, deepPurple, pink, blue, indigo, teal, green, red, blueGrey, amber, cyan } from '@mui/material/colors';

import artistIcon from '../../public/images/artist.png';
import crosswordIcon from '../../public/images/crossword.png';
import odinIcon from '../../public/images/odin.png';

import ProjectDescription from '../content/project-portfolio.mdx';

const projectItems = [
  {
    id: 1,
    title: 'Portfolio Blog Website',
    subtitle: 'React Performance Framework',
    image: artistIcon,
    creditUrl: 'https://www.freepik.com/free-vector/male-artist-painter-cartoon-illustration-people-profession-icon-concept_10244976.htm',
    creditText: `catalyststuff on Freepik`,
    demo: 'this site!',
    source: 'https://github.com/ashoofly/personal-portfolio-blog',
    skills: [
      {
        text: 'Next.js',
        color: orange[800],
      },
      {
        text: 'TypeScript',
        color: lightBlue[600],
      },    
      {
        text: 'MDX',
        color: deepPurple[300],
      },    
      {
        text: 'MUI',
        color: pink[700],
      },
      {
        text: 'Vercel',
        color: green[600],
      },
    ],         
    description: <ProjectDescription />
  },
  {
    id: 2,
    title: 'Crossword with Me',
    subtitle: 'Full-Stack Client-Server App',
    image: crosswordIcon,
    demo: 'https://crosswordwith.me',
    source: 'https://github.com/ashoofly/crossword-with-me',
    skills: [
      {
        text: 'React',
        color: blue[500],
      },
      {
        text: 'Redux',
        color: indigo[300],
      },    
      {
        text: 'WebSockets',
        color: teal[500],
      },    
      {
        text: 'NodeJS',
        color: red[500],
      },      
      {
        text: 'Express',
        color: deepPurple[300],
      },  
      {
        text: 'Firebase',
        color: orange[500],
      },
      {
        text: 'GCP',
        color: blue[500],
      },
      {
        text: 'NoSQL',
        color: green[600],
      },
      {
        text: 'Authn',
        color: red[900],
      },
      {
        text: 'Heroku',
        color: cyan[500],
      }
    ],     
    description: 'This was my first end-to-end web app project, from conceptualization to design to execution, \
    and from UI to WebSocket communication all the way down to the NoSQL database.'
  },
  {
    id: 3,
    title: 'Odin & Scrimba Projects',
    subtitle: 'Front-end Foundations',
    image: odinIcon,
    demo: 'https://ashoofly.github.io/odin-project/',
    source: 'https://github.com/ashoofly/odin-project',
    skills: [
      {
        text: 'HTML',
        color: green[900],
      },
      {
        text: 'CSS',
        color: amber[700],
      },    
      {
        text: 'JavaScript',
        color: blueGrey[500],
      },    
    ],        
    description: 'Check out my first baby projects: a library, rock, paper, scissors game, landing page, \
    travel journal, admin dashboard, signup form.'
  }
]



export default function Projects() {
  return (
    <section id="projects" className={`${sectionStyles.vertical} ${sectionStyles.dark}`}>
      <header>
        <Typography variant="h3" fontWeight="bold" align="center" marginBottom="20px">
              Projects
        </Typography>
      </header>
      <Container className={projects.container}>
        {projectItems.map(proj => <ProjectCard key={proj.id} details={proj} />)}
      </Container>
    </section>
  );
};