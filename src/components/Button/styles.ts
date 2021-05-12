import styled, { css } from 'styled-components';

export enum ButtonStyle {
  SUBMIT_MAIN = 'submit-main',
  SUBMIT_SECONDARY = 'submit-secondary',
  TASK_SUBMIT = 'task-submit',
  TASK_ADD = 'task-add',
}

const submitMain = css`
  width: 180px;
  height: 35px;
  font-size: 1.15rem;
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const submitSecondary = css`
  width: 180px;
  height: 35px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.customWhite};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.primary};
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const taskAdd = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  position: absolute;
  right: 40px;
  bottom: 40px;
  font-size: 3.1rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.primary};
  margin: 0;
  border: none;
  border-radius: 10px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    svg {
      transition-duration: 250ms;
      transform: scale(1.2);
    }
  }
  @media (max-width: 800px) {
    right: 20px;
    bottom: 20px;
  }
`;

const getButtonStyles = ({ buttonStyle }: { buttonStyle: ButtonStyle }) => {
  switch (buttonStyle) {
    case ButtonStyle.SUBMIT_MAIN:
      return submitMain;
    case ButtonStyle.SUBMIT_SECONDARY:
      return submitSecondary;
    case ButtonStyle.TASK_ADD:
      return taskAdd;
    default:
      return null;
  }
};

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition-duration: 200ms;
  &:disabled {
    filter: brightness(0.85);
  }
  ${getButtonStyles};
`;
