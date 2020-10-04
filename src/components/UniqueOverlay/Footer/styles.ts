/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul + ul {
    margin-top: 15px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      color: var(--subtitle-color);

      font-size: 14px;

      &.copyright {
        font-size: 11px;
        color: var(--placeholder-color);
      }

      & + li {
        margin: 10px 0 0;
      }

      &.hide {
        display: none;
      }

      a {
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

  margin-bottom: 25px;

  @media (min-width: 600px) {
    margin-bottom: 30px;

    ul {
      flex-direction: row;

      li {
        &.hide {
          display: flex;
        }
      }

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
