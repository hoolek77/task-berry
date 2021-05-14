import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 180px;
  @media (max-width: 800px) {
    padding-left: 10px;
  }
`;

export const TasksHeader = styled.div`
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
    color: ${(props) => props.theme.primary};
  }
  @media (max-width: 800px) {
    position: static;
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

export const TasksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: calc(100% - 183px);
  position: relative;
  top: 100px;
  padding: 10px 0 10px 10px;
  margin-bottom: 50px;
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
  @media (max-width: 800px) {
    position: static;
    margin-top: 30px;
    padding-left: 1px;
  }
`;

export const TasksLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  top: 100px;
  height: 80vh;
`;
