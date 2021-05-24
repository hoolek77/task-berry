import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 1.3rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px 8px 0 0;
  margin-bottom: 60px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
