const common = {
  customWhite: '#F1F1F1',
  customBlack: '#14181B',
};

export const theme = {
  light: {
    primary: '#a5acfb',
    secondary: '#b5ddff',
    ...common,
  },
  dark: {
    ...common,
  },
};

export type ThemeTypeLight = typeof theme.light;
export type ThemeTypeDark = typeof theme.dark;
