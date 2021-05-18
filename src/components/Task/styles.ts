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
  animation: ${show} 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
  height: 200px;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundSecondary};
  box-shadow: 0px 3px 10px rgba(4, 4, 4, 0.3);
  border-radius: 12px;
  margin-bottom: 65px;
  margin-right: 70px;
  opacity: ${(props: { finished: boolean }) => (props.finished ? '0.7' : '1')};
  span {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  background-color: ${(props: { color: string }) => props.color};
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: left;
  margin-bottom: 10px;
`;

export const TaskHeading = styled.h1`
  text-align: center;
  font-size: 1.6rem;
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
    background: ${(props) => props.theme.primary};
    border-radius: 0 0 10px 10px;
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
