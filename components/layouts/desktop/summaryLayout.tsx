import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import utilStyles from '../../../styles/utils.module.css';
import summary from '../../../styles/summary.module.css';
import sectionStyles from '../../../styles/section.module.css';

import TypingEffect from '../../typingEffect';
import Link from '@mui/material/Link';
import SummaryText from '../../content/summaryText.mdx';

type SummaryHeaderMobileProps = {
  attributes: {
    id: number,
    text: string,
    color: string
  }[],
  textRenderer: (text: string, i: number) => JSX.Element
}

export default function SummaryHeaderMobile({ attributes, textRenderer} : SummaryHeaderMobileProps) {
  return (
    <>
      <header className={utilStyles.header}>
        <figure className={utilStyles.flexCenterVert}>
          <Image
            priority
            src="/images/profile.png"
            height={250}
            width={250}
            alt="Angela Hsu face"
            className={utilStyles.img}
          />
          <figcaption className={utilStyles.figcaption}>
              yes, this is the only picture of me, I use it everywhere
          </figcaption> 
        </figure>
        <Box>
          <Typography variant="h5">
            Hi, I&apos;m
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            Angela Hsu
          </Typography>

          <Box color="text.secondary">
            <TypingEffect 
              text={attributes.map(attr => attr.text)} 
              displayTextRenderer={textRenderer}
            />
          </Box>
          <Box className={summary.linkContainer}>
            <Link href="https://www.linkedin.com/in/ayhsu/" target="_blank" rel="noreferrer"><LinkedInIcon color="action" fontSize="large" /></Link>
            <Link href="https://github.com/ashoofly" target="_blank" rel="noreferrer"><GitHubIcon color="action" fontSize="large" /></Link>
          </Box>
          <section className={sectionStyles.content}>
            <SummaryText />
          </section>
        </Box>
      </header>
    </>
  );
};