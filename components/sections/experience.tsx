import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import ExperienceCard from '../experienceCard';
import sectionStyles from '../../styles/section.module.css';
import { Box, Typography } from '@mui/material';


import utIcon from '../../public/images/ut-icon.png';
import arlIcon from '../../public/images/arl-icon.png';
import optarosIcon from '../../public/images/optaros-icon.png';
import pingIcon from '../../public/images/ping.png';
import earthIcon from '../../public/images/earth.png';

import UTDescription from '../content/experience-utexas.mdx';
import ARLDescription from '../content/experience-arl.mdx';
import OptarosDescription from '../content/experience-optaros.mdx';
import PingDescription from '../content/experience-ping.mdx';

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
      description: <UTDescription />,
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
      description: <ARLDescription />,
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
      description: <OptarosDescription />,
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
      description: <PingDescription />,
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
            <Box sx={ index < experienceData.length-1 ? {height: '150px', width: '0px', border: `2px solid #9e9e9e`, margin: 'auto', backgroundColor: '#9e9e9e'} : {}}></Box>
          </Box>
        ))}
      </Box>
    </section>
  );
};