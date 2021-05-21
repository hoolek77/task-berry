import { Alert } from '@material-ui/lab';
import styled from 'styled-components';

export const StyledAlert = styled(Alert)<{ isDarkTheme: boolean }>`
  &.MuiAlert-standardSuccess {
    background-color: ${({ isDarkTheme }) => isDarkTheme && '#4bb543'};
  }

  &.MuiAlert-standardError {
    background-color: ${({ isDarkTheme }) => isDarkTheme && '#6f0000'};
  }
`;
