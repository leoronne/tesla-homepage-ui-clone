import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  width: 100%;
  padding: 0 50px;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;

  width: 100%;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: var(--title-color);
  }
  > h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--subtitle-color);
    a {
      color: var(--subtitle-color);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 130px;

  > a {
    background: var(--button-primary);
    color: white;
    opacity: 0.8;
    min-width: 100%;
    text-decoration: none;
    text-align: center;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      transition: opacity var(--transition);
      opacity: 0.9;
    }

    &.only-one {
      margin-bottom: 55px;
    }

    &.white {
      background: white;
      color: var(--button-primary);
      opacity: 0.65;
    }

    & + a {
      margin: 15px 0 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;
    > a {
      min-width: 250px !important;
    }

    > a + a {
      margin: 0 0 0 10px;
    }
  }
`;
