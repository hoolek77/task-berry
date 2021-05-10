import styled, { css } from 'styled-components';

export enum ButtonStyle {
  SIGN_MAIN = 'sign-main',
  SIGN_SECONDARY = 'sign-secondary',
  TASK_SUBMIT = 'task-submit',
}

const signMain = css`
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

const signSecondary = css`
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

const taskSubmit = css`
  width: 180px;
  height: 35px;
  font-size: 1.15rem;
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const getButtonStyles = ({ buttonStyle }: { buttonStyle: ButtonStyle }) => {
  switch (buttonStyle) {
    case ButtonStyle.SIGN_MAIN:
      return signMain;
    case ButtonStyle.SIGN_SECONDARY:
      return signSecondary;
    case ButtonStyle.TASK_SUBMIT:
      return taskSubmit;
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
