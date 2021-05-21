export type Severity = 'success' | 'info' | 'warning' | 'error';

export type ThemeType = 'dark' | 'light';

export type Notification = {
  severity: Severity;
  message: string;
};

export type Task = {
  _id: string;
  userId: string;
  title: string;
  label?: string;
  description: string;
  color: string;
  finished: boolean;
};

export type NotificationsState = {
  severity: Severity;
  message: string;
  open: boolean;
};

export type TasksState = {
  tasks: Task[];
  labels: string[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

export type CreateTaskType = {
  title: string;
  description: string;
  color: string;
  label?: string;
};

export type UpdateTaskType = {
  title?: string;
  description?: string;
  color?: string;
};

export type UserState = {
  email: string;
  name: string;
  accessToken: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

export type UserSignIn = {
  email: string;
  password: string;
};

export type UserPayload = {
  email: string;
  name: string;
  accessToken: string;
};

export enum ButtonStyle {
  SUBMIT_MAIN = 'submit-main',
  SUBMIT_SECONDARY = 'submit-secondary',
  TASK_SUBMIT = 'task-submit',
  TASK_ADD = 'task-add',
  TASK_FINISH = 'task-finish',
  TASK_DELETE = 'task-delete',
}
