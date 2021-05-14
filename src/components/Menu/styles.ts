import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  height: 100%;
  word-wrap: normal;
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  left: 0;
  top: 0;
  span {
    font-size: 1.25rem;
    font-family: 'Righteous', cursive;
    text-align: center;
  }
  svg {
    margin-top: auto;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavigationPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  margin-top: 150px;
`;

export const NavigationItem = styled(Link)<{ isactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isactive ? props.theme.customWhite : '')};
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 200ms;
  svg {
    transition-duration: 150ms;
    margin: 0;
  }
  &:hover {
    ${(props) => (props.isactive ? '' : 'background-color: rgba(241, 241, 241, 0.6)')};
  }
  &:active {
    svg {
      transform: scale(1.2);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  font-size: 0.9rem;
  font-weight: 500;
  position: absolute;
  right: 40px;
  top: 60px;
  svg {
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    top: 20px;
    right: 10px;
  }
`;

export const HamburgerIcon = styled.div<{ isMenuOpen: boolean }>`
  width: 36px;
  height: 4px;
  background-color: ${(props) => (props.isMenuOpen ? props.theme.customWhite : props.theme.mainColor)};
  position: absolute;
  z-index: 101;
  top: 30px;
  left: 10px;
  border-radius: 2px;
  &:before {
    width: 42px;
    height: 4px;
    position: absolute;
    top: -10px;
    content: '';
    background-color: inherit;
    border-radius: 2px;
  }
  &:after {
    width: 42px;
    height: 4px;
    position: absolute;
    top: 10px;
    content: '';
    background-color: inherit;
    border-radius: 2px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  padding-top: 170px;
  padding-bottom: 40px;
`;
