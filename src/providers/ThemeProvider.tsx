import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { LS_THEME } from 'constants/theme';
import { ThemeType } from 'models';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { isTheme } from 'utils';

type ThemeContextType = {
  theme: string;
  setThemeState: Dispatch<SetStateAction<ThemeType>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setThemeState: () => {},
});

const ThemeProvider: FC = ({ children }) => {
  const THEME = localStorage.getItem(LS_THEME);
  const [themeState, setThemeState] = useState<ThemeType>(isTheme(THEME) ? THEME : 'light');

  return (
    <ThemeContext.Provider value={{ theme: themeState, setThemeState }}>
      <StyledThemeProvider theme={theme[themeState]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
