import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';
import { motion, AnimatePresence } from 'framer-motion';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    margin-bottom: 50px;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }

  .welcome-text {
    font-size: 32px;
    color: var(--green);
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
`;

const welcomeMessages = [
  'Hello',
  'স্বাগতম',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'مرحبا',
  'Guten tag',
  'Hallo',
  'नमस्ते',
];

const textVariants = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setIsAnimationComplete(true);
      },
    });

    // Calculate timing for text transitions
    const activeAnimationTime = 2500; // 300ms delay + 1500ms path + 700ms opacity
    const transitionTime = Math.floor(activeAnimationTime / welcomeMessages.length);

    // Start text transitions with the logo animation
    const startTextTransitions = () => {
      const changeText = () => {
        if (currentIndex < welcomeMessages.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setTimeout(changeText, transitionTime);
        }
      };
      changeText();
    };

    // Start text transitions after initial delay
    setTimeout(startTextTransitions, 300); // Same delay as logo animation

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isAnimationComplete) {
      const timeout = setTimeout(() => finishLoading(), 10);
      return () => clearTimeout(timeout);
    }
  }, [isAnimationComplete]);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: 'hidden' }} />

      <div className="content-wrapper">
        <div className="logo-wrapper">
          <IconLoader />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="welcome-text"
            variants={textVariants}
            initial="initial"
            animate="enter"
            exit="exit">
            {welcomeMessages[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
