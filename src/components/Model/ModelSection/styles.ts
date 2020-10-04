/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div<{ background: { desktop: string; mobile: string } }>`
  background: ${props => (props.background.mobile ? `url(${props.background.mobile})` : '')} no-repeat center;
  background-size: cover;

  height: 100vh;

  scroll-snap-align: start;

  @media (min-width: 600px) {
    background: ${props => (props.background.desktop ? `url(${props.background.desktop})` : '')} no-repeat center;
    background-size: cover;
  }
`;
