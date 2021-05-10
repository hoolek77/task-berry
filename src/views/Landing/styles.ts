import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 0 100px;
  @media (max-width: 1350px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    overflow: hidden;
  }
`;

export const Splash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  max-height: 650px;
  width: 50%;
  max-width: 750px;
  font-weight: 500;
  p {
    font-size: 2.8rem;
    font-family: 'Righteous', cursive;
    letter-spacing: 0.05em;
    margin: 0;
    padding-left: 50px;
    margin-bottom: 15px;
  }
  span {
    font-size: 1.3rem;
    font-family: 'Righteous', cursive;
    letter-spacing: 0.02em;
    padding-left: 50px;
    margin-bottom: 40px;
  }
  @media (max-width: 1350px) {
    width: 0;
    height: 0;
    p,
    span {
      display: none;
      margin: 0;
      padding: 0;
    }
    svg {
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 150px;
      left: 0;
      right: 150px;
      margin: 0 auto;
      opacity: 0.15;
    }
  }
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: auto;
  span {
    font-family: 'Righteous', cursive;
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 1350px) {
    width: 95%;
    height: 580px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    margin-top: 100px;
    span {
      font-size: 1.8rem;
    }
  }
`;
