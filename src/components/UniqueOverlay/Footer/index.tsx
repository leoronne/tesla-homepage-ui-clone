/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { MotionValue } from 'framer-motion';

import { Container } from './styles';

const Footer = ({ opacity }: { opacity: MotionValue<number> }) => {
  const footerLinks = [
    {
      text: `Tesla © ${new Date().getFullYear()}`,
      link: 'https://www.tesla.com/about',
      showOnMobile: true,
    },
    {
      text: `Privacy & Legal`,
      link: 'https://www.tesla.com/about/legal',
      showOnMobile: true,
    },
    {
      text: `Contact`,
      link: 'https://www.tesla.com/contact',
      showOnMobile: false,
    },
    {
      text: `Careers`,
      link: 'https://www.tesla.com/careers',
      showOnMobile: false,
    },
    {
      text: `Get Newsletter`,
      link: 'https://www.tesla.com/updates',
      showOnMobile: false,
    },
    {
      text: `News`,
      link: 'https://www.tesla.com/blog',
      showOnMobile: true,
    },
    {
      text: `Forums`,
      link: 'https://forums.tesla.com/',
      showOnMobile: false,
    },
    {
      text: `Locations`,
      link: 'https://www.tesla.com/findus/list',
      showOnMobile: false,
    },
  ];
  return (
    <Container style={{ opacity }}>
      <ul>
        {footerLinks.map(item => (
          <li key={item.text} className={item.showOnMobile ? 'show' : 'hide'}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        <li className="copyright">
          {`Designed by  `}
          <a href="http://github.com/leoronne" target="_blank" rel="noopener noreferrer">
            Leonardo Ronne
          </a>
          , for study purposes
        </li>
      </ul>
    </Container>
  );
};

export default Footer;
