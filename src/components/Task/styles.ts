import { ReactComponent as EditSvg } from 'assets/Edit.svg';
import { ReactComponent as MoreSvg } from 'assets/More.svg';
import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0% {
    transform: scale(0.4);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const TaskContainer = styled.li`
  position: relative;
  animation: ${show} 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
  height: 200px;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  box-shadow: 0px 3px 10px rgba(4, 4, 4, 0.3);
  border-radius: 12px;
  margin-bottom: 65px;
  margin-right: 70px;
  opacity: ${({ finished }: { finished: boolean }) => (finished ? '0.7' : '1')};

  span {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Edit = styled(EditSvg)`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 16px);
  right: 15px;
  z-index: 2;
  transition: all 150ms;
`;

export const More = styled(MoreSvg)`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 8px);
  right: 15px;
  z-index: 2;
  transition: all 150ms;
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  background-color: ${({ color }: { color: string }) => color};
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: left;
  margin-bottom: 10px;

  svg:active {
    transform: scale(1.2);
  }
`;

export const TaskHeading = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  max-width: 80%;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #c7c7c7;
    box-shadow: inset 0 0 5px #d3d3d3;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
  }
`;

export const TaskDescripton = styled.p`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  word-wrap: break-word;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    background: #c7c7c7;
    box-shadow: inset 0 0 5px #d3d3d3;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
  }
`;

export const TaskButtonsContainer = styled.div`
  margin: 10px 0;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TaskEditTitleInput = styled.input`
  width: 240px;
  height: 25px;
  border: none;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.fontPrimary};
  background-color: ${({ color }) => color};
  font-size: 1.15rem;
  font-weight: 500;
  color: ${({ theme }) => theme.customBlack};
  outline: none;
`;

export const TaskEditDescriptionInput = styled.input`
  width: 240px;
  height: 25px;
  border: none;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.fontPrimary};
  background-color: inherit;
  font-size: 1.15rem;
  font-weight: 500;
  color: ${({ theme }) => theme.customBlack};
  outline: none;
`;
