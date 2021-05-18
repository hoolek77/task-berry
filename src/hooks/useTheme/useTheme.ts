import { useContext } from 'react';
import { LS_THEME } from 'constants/theme';
import { ThemeContext } from 'providers/ThemeProvider';

export const useTheme = () => {
  const { theme, setThemeState } = useContext(ThemeContext);

  const switchTheme = () => {
    setThemeState((prev) => {
      if (prev === 'dark') {
        localStorage.setItem(LS_THEME, 'light');
        return 'light';
      }
      localStorage.setItem(LS_THEME, 'dark');
      return 'dark';
    });
  };

  const isDarkTheme = () => {
    return theme === 'dark';
  };

  return { theme, isDarkTheme, switchTheme };
};
