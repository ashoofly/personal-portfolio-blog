import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import indexStyles from '../../styles/index.module.css';
import sectionStyles from '../../styles/section.module.css';
import utilStyles from '../../styles/utils.module.css';

import TypingEffect from '../typingEffect';
import Link from '@mui/material/Link';

import SummaryText from '../content/summaryText.mdx';

const attributes = [
  {
    id: 1,
    text: 'a curious learner',
    color: 'orange'
  },
  {
    id: 2,
    text: 'a professional problem-solver',
    color: 'blue'
  },
  {
    id: 3,
    text: 'an empathetic listener',
    color: 'purple'
  },  {
    id: 4,
    text: 'a lifelong tree hugger',
    color: 'green'
  },  {
    id: 5,
    text: 'a curious learner',
    color: 'purple'
  },  {
    id: 6,
    text: 'a committed team member',
    color: 'brown'
  },
]

const textRenderer = (text, i) => {
  return (
    <span style={{ color: attributes[i].color, fontFamily: "Roboto"}}>{text}</span>
  );
}

type SummaryProps = {
  content: string
}

export default function Summary(props: SummaryProps) {
  const { content } = props;
  return (
    <section id="about" className={`${sectionStyles.horizontal} ${indexStyles.intro}`}>
      <figure style={{
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'gap': '10px'
      }}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={250}
          width={250}
          layout="responsive"
          alt="Angela Hsu faceshot"
        />
        <figcaption style={{
          'max-width': '250px',
          'font-size': 'small',
          'display': 'flex',
          'text-align': 'center'
        }}><i>yes, this is the only picture of me,<br />
          I use it everywhere</i></figcaption>
      </figure>

      <summary>
        <header>
          <Typography variant="h5">
            Hi, I&apos;m
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            Angela Hsu
          </Typography>
        </header>
        <Box color="text.secondary">
          <TypingEffect 
            text={attributes.map(attr => attr.text)} 
            displayTextRenderer={textRenderer}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          gap: '10px',
          height: '3rem',
          alignItems: 'center'
        }}>
          <Link href="https://www.linkedin.com/in/ayhsu/" target="_blank" rel="noreferrer"><LinkedInIcon color="action" fontSize="large" /></Link>
          <Link href="https://github.com/ashoofly" target="_blank" rel="noreferrer"><GitHubIcon color="action" fontSize="large" /></Link>
        </Box>
        <section className={sectionStyles.content}>
          <SummaryText />
        </section>
      </summary>
    </section>
  );
};