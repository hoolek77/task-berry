export type Severity = 'success' | 'info' | 'warning' | 'error';

export type Notification = {
  severity: Severity;
  message: string;
};

export type Task = {
  _id: string;
  userId: string;
  title: string;
  decription: string;
  color: string;
  finished: boolean;
};
