import { Alert } from '@material-ui/lab';
import styled from 'styled-components';

export const StyledAlert = styled(Alert)`
  &.MuiAlert-standardSuccess {
    background-color: '#4BB543';
  }

  &.MuiAlert-standardError {
    background-color: '#6f0000';
  }
`;
