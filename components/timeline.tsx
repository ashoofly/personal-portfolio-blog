import Image from 'next/image';
import { Stack, StackProps, styled, Box } from '@mui/material';
import utilStyles from '../styles/utils.module.css';
import ContainerGrid from './common/ContainerGrid';
import Experience from './experience';

interface TimelineProps {}

const Timeline: React.FunctionComponent<TimelineProps> = (props) => {

  const experiences = [
    {
      id: 1,
      icon: (
        <Image
          priority
          src="/images/ut-icon.png"
          className={utilStyles.borderCircle}
          height={150}
          width={150}
          alt="University of Texas logo"
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
          priority
          src="/images/arl-icon.jpg"
          className={utilStyles.borderCircle}
          height={150}
          width={150}
          alt="ARL logo"
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
          priority
          src="/images/optaros-icon.png"
          height={150}
          width={150}
          alt="Venn diagram figure with Optaros in the middle and Strategy, Design, and Development circles overlapping"
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
          priority
          src="/images/ping-icon.jpg"
          height={150}
          width={380}
          alt="Ping Identity icon"
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
          priority
          src="/images/earth.jpg"
          className={utilStyles.borderCircle}
          height={175}
          width={175}
          alt="Web and climate image"
        />
      ),
      title: 'Learning web development & career shift to climate tech',
      location: 'Boulder, CO',
      years: 'July 2022 - Present',
      description: 'Taking some time to get more into the front-end design aspect of the tech field',
    },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {experiences.map((experience, index) => (
          <>
            <Experience
              key={experience.id}
              content={experience}
            />
            <Box sx={ index < experiences.length-1 ? {height: '150px', width: '0px', border: '2px solid #e4e4e4', margin: 'auto'} : {}}></Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default Timeline;