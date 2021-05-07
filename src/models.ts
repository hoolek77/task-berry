export type Color = 'success' | 'info' | 'warning' | 'error';

export type Notification = {
  severity: Color;
  message: string;
};
