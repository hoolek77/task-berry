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

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 250px);
  margin: 0 auto;
  z-index: 100;
  background-color: ${(props) => props.theme.customWhite};
  box-shadow: 1px 2px 15px 1px rgba(4, 4, 4, 0.3);
  border-radius: 8px;
  animation: ${show} 150ms ease-in;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 800px) {
    max-width: 95%;
  }
`;
