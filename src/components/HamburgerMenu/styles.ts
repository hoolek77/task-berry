import styled from 'styled-components';

export const HamburgerIcon = styled.div<{ isMenu: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 30px;
  z-index: 101;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isMenu }) => (isMenu ? '#963757' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isMenu }) => (isMenu ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isMenu }) => (isMenu ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ isMenu }) => (isMenu ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isMenu }) => (isMenu ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const HamburgerMenuContainer = styled.div<{ isMenu: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: ${({ isMenu }) => (isMenu ? 'translateX(0)' : 'translateX(-100%)')};
  width: 90px;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  padding-top: 170px;
  padding-bottom: 40px;
  transition: all 0.3s ease-in-out;
  svg {
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
`;
