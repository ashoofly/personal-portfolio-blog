import Image from 'next/image';
import { Box, Typography, Container } from '@mui/material';

import indexStyles from '../../styles/index.module.css';
import sectionStyles from '../../styles/section.module.css';
import utilStyles from '../../styles/utils.module.css';
import projects from '../../styles/projects.module.css';
import Link from '@mui/material/Link';

import ProjectCard from '../projectCard';
import { orange, lightBlue, deepPurple, pink, blue, indigo, teal, green, red, blueGrey, amber, cyan, purple, lightGreen, deepOrange } from '@mui/material/colors';

import artistIcon from '../../public/images/artist.png';
import crosswordIcon from '../../public/images/crossword.png';
import odinIcon from '../../public/images/odin.png';

import PortfolioDescription from '../content/project-portfolio.mdx';
import CrosswordDescription from '../content/project-crossword.mdx';
import OdinDescription from '../content/project-odin.mdx';

const projectItems = [
  {
    id: 1,
    title: 'Portfolio Blog Website',
    subtitle: 'React Performance Framework',
    dates: 'Nov 2022',
    image: artistIcon,
    imageCredit: `<p>Art by <a href='https://www.freepik.com/free-vector/male-artist-painter-cartoon-illustration-people-profession-icon-concept_10244976.htm'>catalyststuff</a><br /> on Freepik</p>`,
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
    description: <PortfolioDescription />
  },
  {
    id: 2,
    title: 'Crossword with Me',
    subtitle: 'Full-Stack Client-Server App',
    dates: 'Jul 2022 - Oct 2022',
    image: crosswordIcon,
    imageCredit: `<p>Screenshot of <a href='https://wwww.crosswordwith.me'>crosswordwith.me</a><br /></p>`,
    demo: 'https://crosswordwith.me',
    source: 'https://github.com/ashoofly/crossword-with-me',
    skills: [
      {
        text: 'React',
        color: cyan[500],
      },
      {
        text: 'Redux',
        color: indigo[200],
      },    
      {
        text: 'WebSockets',
        color: teal[300],
      },    
      {
        text: 'NodeJS',
        color: red[400],
      },      
      {
        text: 'Express',
        color: blue[400],
      },  
      {
        text: 'Firebase',
        color: orange[500],
      },
      {
        text: 'GCP',
        color: purple[300],
      },
      {
        text: 'NoSQL',
        color: lightBlue[500],
      },
      {
        text: 'Authn',
        color: deepOrange[300],
      },
      {
        text: 'Heroku',
        color: blueGrey[300],
      }
    ],     
    description: <CrosswordDescription />
  },
  {
    id: 3,
    title: 'Odin & Scrimba Projects',
    subtitle: 'Front-end Foundations',
    dates: 'Feb 2022 - Jun 2022',
    image: odinIcon,
    imageCredit: `<p>Art by <a href='https://dribbble.com/shots/11117717-The-Odin-Project-Website-Redesign'>Ada Chiu</a><br /> for The Odin Project</p>`,
    demo: 'links below',
    source: 'https://github.com/ashoofly/odin-project',
    skills: [
      {
        text: 'HTML',
        color: pink[500],
      },
      {
        text: 'CSS',
        color: amber[700],
      },    
      {
        text: 'JavaScript',
        color: green[500],
      },    
    ],        
    description: <OdinDescription />
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