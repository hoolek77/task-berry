import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: absolute;
  top: calc(50% - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
`;

export const NavigationItem = styled(Link)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isActive ? props.theme.backgroundPrimary : '')};
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 200ms;
  text-decoration: none;
  svg {
    transition-duration: 150ms;
    margin: 0;
  }
  &:hover {
    ${(props) => (props.isActive ? '' : 'background-color: rgba(241, 241, 241, 0.6)')};
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
