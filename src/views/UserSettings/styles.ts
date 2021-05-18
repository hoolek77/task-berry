import styled from 'styled-components';

export const SettingsHeader = styled.div`
  position: relative;
  top: 60px;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: left;

  @media (max-width: 800px) {
    position: static;
    margin-top: 120px;
    font-size: 1.6rem;
    letter-spacing: 0.03em;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 100px;
`;

export const Setting = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const SwitchWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .MuiSwitch-track {
    background-color: #b29cd9 !important;
  }
`;
