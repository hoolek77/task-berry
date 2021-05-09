import styled, { keyframes } from 'styled-components';

const show = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 500px;
  background-color: ${(props) => props.theme.customWhite};
  border-radius: 8px;
  box-shadow: 1px 3px 15px 1px rgba(4, 4, 4, 0.35);
  animation: ${show} 300ms ease;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      position: relative;
      i {
        position: absolute;
        top: 1%;
        right: 3%;
        cursor: pointer;
        transition-duration: 150ms;
        &:active {
          transform: scale(1.4);
        }
      }
    }
  }
  @media (max-width: 1350px) {
    width: 90vw;
    background: transparent;
    box-shadow: none;
  }
`;

export const SignInHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  background-color: ${(props) => props.theme.primary};
  border-radius: 8px 8px 0 0;
  margin-bottom: 80px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1350px) {
    font-size: 1.4rem;
    background: transparent;
    margin-bottom: 50px;
  }
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: 1.15rem;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #808080;
  background: none;
  padding-left: 5px;
  padding-bottom: 7px;
  outline: none;
  margin-bottom: 55px;
  transition-duration: 150ms;
  &:placeholder {
    font-size: 1.05rem;
    color: #9a9a9a;
    svg {
      margin-right: 10px;
    }
  }
  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.customBlack};
  }
`;
