import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LabelMenuContainer = styled.div`
  display: flex;
  white-space: nowrap;
  flex-direction: row;
  justify-content: center;
  padding: 10px 10px 10px 10px;
  padding-bottom: 10px;
  margin: 0 auto;
  width: 90%;
  position: relative;
  top: 80px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #c7c7c7;
    box-shadow: inset 0 0 5px #d3d3d3;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 1350px) {
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    max-height: calc(100vh - 220px);
    position: static;
    margin-top: 30px;
  }
`;

export const LabelMenuItem = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0 15px 0 15px;
  margin-left: 10px;
  height: 50px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.primary : '')};
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 200ms;
  text-decoration: none;
  &:hover {
    ${({ $isActive }) => ($isActive ? '' : 'background-color: rgba(141, 141, 141, 0.6)')};
  }
`;
