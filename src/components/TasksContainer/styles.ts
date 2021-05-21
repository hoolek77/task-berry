import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: calc(100vh - 240px);
  position: relative;
  top: 100px;
  padding: 10px 0 10px 10px;
  overflow-x: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    background: #c7c7c7;
    box-shadow: inset 0 0 5px #d3d3d3;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
  }
  @media (max-width: 800px) {
    max-height: calc(100vh - 320px);
    justify-content: center;
    position: static;
    margin-top: 30px;
    padding-left: 1px;
  }
`;
