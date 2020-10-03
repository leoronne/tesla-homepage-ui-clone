import React from 'react';
import { useTransform } from 'framer-motion';

import Header from './Header';
import Footer from './Footer';

import { useWrapperScroll } from '../../hooks';

import { Container } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container id="top-page">
      <Header />
      <Footer opacity={opacity} />
    </Container>
  );
};

export default UniqueOverlay;
