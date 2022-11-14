import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import ExperienceCard from '../experienceCard';
import SubExperienceCard from '../subExperienceCard';
import sectionStyles from '../../styles/section.module.css';
import experienceStyles from '../../styles/experiences.module.css';
import { Box, Typography } from '@mui/material';


import utIcon from '../../public/images/ut-icon.png';
import arlIcon from '../../public/images/arl-icon.png';
import optarosIcon from '../../public/images/optaros-icon.png';
import pingIcon from '../../public/images/ping.png';
import earthIcon from '../../public/images/earth.png';

import UTDescription from '../content/experience-utexas.mdx';
import ARLDescription from '../content/experience-arl.mdx';
import OptarosDescription from '../content/experience-optaros.mdx';
import PingDescription from '../content/experience-ping-intro.mdx';
import FutureDescription from '../content/experience-future.mdx';

import PingQuality from '../content/experience-ping-quality.mdx';
import PingDevTools from '../content/experience-ping-devtools.mdx';
import PingLeader from '../content/experience-ping-leader.mdx';

import testingIcon from '../../public/images/testing.png';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import leaderIcon from '../../public/images/leader.png';
// <a target="_blank" href="https://icons8.com/icon/58019/leader">Leader</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>


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
      phases: [
        {
          id: 1,
          icon: (
            <Image
            src="/images/gears.svg"
            width={100}
            height={100}
            alt="automated testing"
            style={{ objectFit: 'contain' }}
            className={experienceStyles.svgFilter}
          />
          ),
          years: '2017-2019',
          summary: <PingQuality />
        },
        {
          id: 2,
          icon: (
            <Image
            src="/images/devtools.svg"
            width={90}
            height={90}
            alt="toolbox"
            style={{ objectFit: 'contain' }}
            className={experienceStyles.svgFilter}
          />
          ),
          years: '2019-2021',
          summary: <PingDevTools />
        },
        {
          id: 3,
          icon: (
            <Image
            src="/images/leader.svg"
            width={90}
            height={90}
            alt="team silhouettes"
            style={{ objectFit: 'contain' }}
            className={experienceStyles.svgFilter}
          />
          ),
          years: '2021-2022',
          summary: <PingLeader />
        },
      ],
      title: 'Ping Identity',
      location: 'Austin, TX and Remote from Boulder, CO',
      years: '2017-2022',
      duration: '5 years',
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
      title: 'Career Shift to Full-Stack Climate or Civic Tech',
      location: 'Boulder, CO',
      years: 'July 2022 - Present',
      description: <FutureDescription />,
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
            {(experience.phases && index < experienceData.length-1) && <Box className={experienceStyles.halfTimeline}></Box>}
            {experience.phases && <SubExperienceCard phases={experience.phases} />}
            {(index < experienceData.length-1) && <Box className={experienceStyles.timeline}></Box>}
          </Box>
        ))}
      </Box>
    </section>
  );
};