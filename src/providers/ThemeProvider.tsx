import { createContext, FC, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const ThemeContext = createContext([{}, () => {}]);

const ThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState<'light' | 'dark'>('light');

  const switchTheme = () => {
    setThemeState((prevState) => {
      if (prevState === 'light') {
        return 'dark';
      }
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={[themeState, switchTheme]}>
      <StyledThemeProvider theme={theme[themeState]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
