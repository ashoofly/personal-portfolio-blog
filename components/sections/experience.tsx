import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import ExperienceCard from '../experienceCard';
import sectionStyles from '../../styles/section.module.css';
import { Box, Typography } from '@mui/material';


import utIcon from '../../public/images/ut-icon.png';
import arlIcon from '../../public/images/arl-icon.jpg';
import optarosIcon from '../../public/images/optaros-icon.png';
import pingIcon from '../../public/images/ping.png';
import earthIcon from '../../public/images/earth.png';

export default function Experience() {

  const experienceData = [
    {
      id: 1,
      icon: (
        <Image
          src={utIcon}
          className={utilStyles.borderCircle}
          alt="University of Texas logo"
          style={{ objectFit: 'contain' }}
        />
      ),
      title: 'BS in Computer Science',
      years: '2012-2015',
      location: 'Austin, TX',
      duration: '2 years',
      description: 'Made a career switch I graduated from the University of Texas at Austin with a second Bachelor\'s in Computer Science. (My first Bachelor\'s was in English many years prior.)',
    },
    {
      id: 2,
      icon: (
        <Image
          src={arlIcon}
          className={utilStyles.borderCircle}
          alt="ARL logo"
          style={{ objectFit: 'contain' }}
        />
      ),
      title: 'Applied Research Labs',
      location: 'Austin, TX',
      years: '2013-2014',
      duration: '1.5 years',
      description: 'While I was studying computer science, I worked at ARL in the Space & Geophysics department, where I collaborated with physicists and engineers to help process geospatial data and automate distribution to agencies around the world. Mostly used Python here (though there was some embedded C++ in the survey nodes).',
    },
    {
      id: 3,
      icon: (
        <Image
          src={optarosIcon}
          alt="Venn diagram figure with Optaros in the middle and Strategy, Design, and Development circles overlapping"
          style={{ objectFit: 'contain' }}
        />
      ),
      title: 'Optaros (now MRM)',
      location: 'Austin, TX',
      years: '2015-2017',
      duration: '2 years',
      description: 'After graduating, I worked at a small e-commerce consulting company where I developed an Android app for one client and migrated a rapidly-growing local client\'s ecommerce site to the Salesforce Cloud platform.',
    },
    {
      id: 4,
      icon: (
        <Image
          src={pingIcon}
          alt="Ping Identity icon"
          style={{ objectFit: 'contain' }}
        />
      ),
      title: 'Ping Identity',
      location: 'Austin, TX and Remote from Boulder, CO',
      years: '2017-2022',
      duration: '5 years',
      description: 'Did a lot of things - quality, DevOps, senior software engineer to manager',
    },
    {
      id: 5,
      icon: (
        <Image
          src={earthIcon}
          className={utilStyles.borderCircle}
          alt="Web and climate image"
          style={{ objectFit: 'contain' }}
        />
      ),
      title: 'Learning web development & career shift to climate tech',
      location: 'Boulder, CO',
      years: 'July 2022 - Present',
      description: 'Taking some time to get more into the front-end design aspect of the tech field',
    },
  ];

  return (
    <section id="experience" className={`${sectionStyles.vertical} ${sectionStyles.light}`}>
      <header style={{ marginBottom: "20px" }}>
        <Typography component="h2" variant="h3" fontWeight="bold" align="center">
              Experience
        </Typography>
        <Typography component="p" align="center">
              My professional journey so far
        </Typography>
      </header>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {experienceData.map((experience, index) => (
          <Box key={experience.id}>
            <ExperienceCard content={experience} />
            <Box sx={ index < experienceData.length-1 ? {height: '150px', width: '0px', border: '2px solid #e4e4e4', margin: 'auto', backgroundColor: '#e4e4e4'} : {}}></Box>
          </Box>
        ))}
      </Box>
    </section>
  );
};