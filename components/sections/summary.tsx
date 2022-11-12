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
import { orange, lightBlue, deepPurple, pink, blue, indigo, teal, green, red, blueGrey, amber, purple, brown, deepOrange } from '@mui/material/colors';

const attributes = [
  {
    id: 1,
    text: 'a professional problem-solver',
    color: indigo[400]
  },
  {
    id: 2,
    text: 'a curious learner',
    color: orange['A700']
  },
  {
    id: 3,
    text: 'an empathetic listener',
    color: deepPurple[400]
  },  {
    id: 4,
    text: 'a lifelong tree hugger',
    color: green[500]
  }, {
    id: 5,
    text: 'a committed team member',
    color: pink[400]
  },
]

const textRenderer = (text, i) => {
  return (
    <span style={{ color: attributes[i].color}}>{text}</span>
  );
}

type SummaryProps = {
  content: string
}

export default function Summary(props: SummaryProps) {
  const { content } = props;
  return (
      <section id="about" className={`${sectionStyles.horizontal} ${indexStyles.intro} ${sectionStyles.light}`}>
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
          <figcaption className={utilStyles.figcaption}><i>yes, this is the only picture of me,<br />
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