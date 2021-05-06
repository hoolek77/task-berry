export interface CookieOptions {
  cname: string;
  cvalue: string;
  expiredHours: number;
  path?: string;
}

export const saveCookie = (options: CookieOptions) => {
  const { cname, cvalue, expiredHours, path = '/' } = options;

  const date = new Date();

  if (expiredHours) {
    date.setHours(date.getHours() + expiredHours);
  }

  const expires = date.toUTCString();

  document.cookie = `${cname}=${cvalue};expires=${expires};path=${path}`;
};

// eslint-disable-next-line consistent-return
export const getCookieValue = (name: string) => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (match) return match[2];
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
