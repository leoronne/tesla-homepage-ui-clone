import React from 'react';

import Drawer from './Drawer';

import { Container, HeaderLeft, HeaderCenter, HeaderRight, Logo } from './styles';

const Header: React.FC = () => {
  const headerLinks = {
    center: [
      {
        text: 'Model S',
        link: 'https://www.tesla.com/models',
      },
      {
        text: 'Model 3',
        link: 'https://www.tesla.com/model3',
      },
      {
        text: 'Model X',
        link: 'https://www.tesla.com/modelx',
      },
      {
        text: 'Model Y',
        link: 'https://www.tesla.com/modely',
      },
      {
        text: 'Solar Roof',
        link: 'https://www.tesla.com/solarroof',
      },
      {
        text: 'Solar Panels',
        link: 'https://www.tesla.com/solarpanels',
      },
    ],
    right: [
      {
        text: 'Shop',
        link: 'https://shop.tesla.com/us/en.html?tesref=true',
      },
      {
        text: 'Tesla Account',
        link: 'https://www.tesla.com/teslaaccount',
      },
    ],
  };

  return (
    <Container>
      <HeaderLeft>
        <Logo />
      </HeaderLeft>

      <HeaderCenter>
        <ul>
          {headerLinks.center.map(item => (
            <li key={item.text}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </HeaderCenter>

      <HeaderRight>
        <ul>
          {headerLinks.right.map(item => (
            <li key={item.text}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <Drawer />
      </HeaderRight>
    </Container>
  );
};

export default Header;
