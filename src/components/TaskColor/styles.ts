import styled from 'styled-components';

export const ColorBox = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: ${({ color }) => color};
  box-shadow: ${({ color, selectedColor }: { color: string; selectedColor: string }) =>
    selectedColor === color ? '0px 0px 10px 5px #b1b5e6' : ''};
  transition-duration: 150ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
