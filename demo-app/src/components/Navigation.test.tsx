// src/components/Navigation.test.tsx
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

test('renders navigation links', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('About')).toBeInTheDocument();
  expect(getByText('Services')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
});
