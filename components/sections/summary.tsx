import useMediaQuery from '@mui/material/useMediaQuery';
import sectionStyles from '../../styles/section.module.css';
import { orange, deepPurple, pink, indigo, green } from '@mui/material/colors';
import SummaryHeaderMobile from '../layouts/mobile/summaryLayout';
import SummaryHeaderDesktop from '../layouts/desktop/summaryLayout';

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

const textRenderer = (text: string, i: number) => {
  return (
    <span style={{ color: attributes[i].color}}>{text}</span>
  );
}

export default function Summary() {
  const isMobile = useMediaQuery('(max-width:599px)');
  return (
      <section id="about" className={`${sectionStyles.container} ${sectionStyles.light}`}>
        <summary>
          {isMobile ? 
            <SummaryHeaderMobile attributes={attributes} textRenderer={textRenderer} /> 
            : 
            <SummaryHeaderDesktop attributes={attributes} textRenderer={textRenderer} />
          }
        </summary>
      </section>
  );
};