import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { LS_THEME } from 'constants/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
  theme: string;
  setThemeState: Dispatch<SetStateAction<ThemeType>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setThemeState: () => {},
});

const ThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState<ThemeType>((localStorage.getItem(LS_THEME) as ThemeType) || 'dark');

  return (
    <ThemeContext.Provider value={{ theme: themeState, setThemeState }}>
      <StyledThemeProvider theme={theme[themeState]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
