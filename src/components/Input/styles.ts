import styled from 'styled-components';

export const FormInput = styled.input`
  color: ${({ theme }) => theme.fontPrimary};
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
    border-bottom: 1px solid ${({ theme }) => theme.fontPrimary};
  }
`;
