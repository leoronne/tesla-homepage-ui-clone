import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string;
  Description: JSX.Element;
  button1?: {
    text: string;
    link: string;
  };
  button2?: {
    text: string;
    link: string;
  };
}

const DefaultOverlayContent: React.FC<Props> = ({ label, Description, button1, button2 }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{Description}</h2>
      </Heading>

      <Buttons>
        <a href={button1?.link || '#'} target="_blank" rel="noopener noreferrer" className={!button2?.link ? 'only-one' : ''}>
          {button1?.text || 'Custom Order'}
        </a>

        {button2?.link && (
          <a href={button2?.link || '#'} target="_blank" rel="noopener noreferrer" className="white">
            {button2?.text || 'Existing Inventory'}
          </a>
        )}
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
