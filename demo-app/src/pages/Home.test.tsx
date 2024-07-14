// src/pages/Home.test.tsx
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders home page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(getByText('Welcome to my website')).toBeInTheDocument();
  expect(getByText('Contact Us')).toBeInTheDocument();
});
