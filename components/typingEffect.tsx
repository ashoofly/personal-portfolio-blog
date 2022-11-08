import * as React from 'react';
import ReactTypingEffect, { ReactTypingEffectProps } from 'react-typing-effect';
import styles from '../styles/typingEffect.module.css';

interface TypingEffectProps extends ReactTypingEffectProps {}

const TypingEffect: React.FunctionComponent<TypingEffectProps> = (props) => {
  const {
    eraseDelay = 2500,
    eraseSpeed = 50,
    speed = 75,
    typingDelay = 1000,
    ...otherProps
  } = props;

  return (
    <ReactTypingEffect
      className={styles.text}
      eraseDelay={eraseDelay}
      eraseSpeed={eraseSpeed}
      speed={speed}
      typingDelay={typingDelay}
      {...otherProps}
    />
  );
};

export default TypingEffect;