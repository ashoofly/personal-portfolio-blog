import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import indexStyles from '../../styles/index.module.css';
import sectionStyles from '../../styles/section.module.css';
import utilStyles from '../../styles/utils.module.css';

import TypingEffect from '../typingEffect';


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
    <span style={{ color: attributes[i].color}}>{text}</span>
  );
}

type SummaryProps = {
  content: string
}

export default function Summary(props: SummaryProps) {
  const { content } = props;
  return (
    <section id="about" className={`${sectionStyles.horizontal} ${indexStyles.intro}`}>
      <figure>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={250}
          width={250}
          alt="Angela Hsu faceshot"
        />
        <figcaption><i>yes, this is the only picture of me,
          I use it everywhere</i></figcaption>
      </figure>

      <summary>
        <header>
          <Typography component="p" variant="h5">
            Hi, I&apos;m
          </Typography>
          <Typography component="h1" variant="h2" fontWeight="bold">
            Angela Hsu
          </Typography>
        </header>
        <Box color="text.secondary">
          <TypingEffect 
            text={attributes.map(attr => attr.text)} 
            displayTextRenderer={textRenderer}
          />
        </Box>
        <Box>
          <LinkedInIcon />
          <GitHubIcon />
        </Box>
        <section className={sectionStyles.content}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </summary>
    </section>
  );
};