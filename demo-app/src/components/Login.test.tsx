// src/components/Login.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import useStore from '../store/useStore';
import Login from './Login';
import { vi } from 'vitest';

test('login form submission', async () => {
  const setIsLoggedIn = vi.fn();
  useStore.setState({ setIsLoggedIn });

  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/username/i), 'admin');
  await userEvent.type(screen.getByLabelText(/password/i), 'password');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(setIsLoggedIn).toHaveBeenCalledWith(true);
});
