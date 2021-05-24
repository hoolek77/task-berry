import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  top: 60px;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: left;
  span,
  p {
    font-size: 1.1rem;
  }
  span {
    color: ${({ theme }) => theme.primary};
  }
  svg {
    position: absolute;
    z-index: 100;
    overflow: visible;
  }
  @media (max-width: 800px) {
    position: static;
    margin-left: 15px;
    margin-top: 120px;
    font-size: 1.6rem;
    letter-spacing: 0.03em;
    span,
    p {
      font-size: 1.1rem;
      margin: 0;
      margin-top: 10px;
    }
  }
`;
