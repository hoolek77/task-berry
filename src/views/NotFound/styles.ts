import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 800px) {
    svg {
      width: 300px;
    }
  }
`;

export const AppName = styled.p`
  font-family: 'Righteous', cursive;
  font-size: 1.3rem;
  color: ${(props) => props.theme.mainColor};
  margin: 0;
`;

export const Number404 = styled.p`
  font-size: 4.6rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-top: 20px;
  margin-bottom: 60px;
  color: ${(props) => props.theme.mainColor};
`;

export const Message = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
