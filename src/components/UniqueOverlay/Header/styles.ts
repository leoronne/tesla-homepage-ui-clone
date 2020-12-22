import styled from 'styled-components';
import { LogoSVG, GitHubSVG } from '../../../styles/Icons';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  min-height: 52px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li + li {
      margin: 0 0 0 30px;
    }

    li {
      list-style: none;
      color: black;
      font-size: 14px;
      font-weight: 700;

      &.hide {
        display: none;
      }

      a {
        text-transform: uppercase;
        text-decoration: none;
        color: var(--title-color);
        transition: color var(--transition);

        &:hover {
          color: black;
          transition: color var(--transition);
        }
      }
    }
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 700;
    margin-left: 15px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      opacity: 0.5;
      transition: opacity var(--transition);

      &:hover {
        opacity: 1;
        transition: opacity var(--transition);
      }
    }
  }

  @media (min-width: 600px) {
    width: 250px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: none;
  }

  @media (min-width: 600px) {
    width: 250px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    ul {
      display: flex;
    }
  }
`;

export const HeaderCenter = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 100px;
  cursor: pointer;
`;

export const GitHubIcon = styled(GitHubSVG)`
  width: 15px;
  height: 15px;
`;
