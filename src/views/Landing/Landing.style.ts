import styled from 'styled-components';

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 550px;
  span {
    font-family: 'Righteous', cursive;
    font-size: 1.25rem;
    color: ${(props) => props.theme.mainColor};
  }
  @media (max-width: 800px) {
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
