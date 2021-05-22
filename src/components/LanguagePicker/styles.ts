import { ReactComponent as PolishFlag } from 'assets/PolishFlag.svg';
import { ReactComponent as UKFlag } from 'assets/UKFlag.svg';
import styled from 'styled-components';

export const LanguageContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledUKFlag = styled(UKFlag)`
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

export const StyledPolishFlag = styled(PolishFlag)`
  margin-left: 20px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;
