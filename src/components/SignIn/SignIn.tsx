import { FC, useState } from 'react';

import { useNotifications } from '../../hooks/useNotifications';
import { api } from '../../utils';

export interface UserSignIn {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const { open } = useNotifications();
  const [user, setUser] = useState<UserSignIn>({ email: '', password: '' });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const { data } = await api.post('/auth/signin', user);

      open({ severity: 'success', message: 'Log in successful' });

      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={(e) => setUser((prevState) => ({ ...prevState, password: e.target.value }))}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
