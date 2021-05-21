import { ThemeType } from 'models';

export const isTheme = (theme: string | null): theme is ThemeType => {
  return theme === 'light' || theme === 'dark';
};
