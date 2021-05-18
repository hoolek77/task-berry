import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  .MuiCircularProgress-circle.MuiCircularProgress-circleIndeterminate {
    color: ${({ theme }) => theme.loader} !important;
  }
`;
