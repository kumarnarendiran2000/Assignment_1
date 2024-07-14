// src/pages/About.test.tsx
import { render } from '@testing-library/react';
import About from './About';

test('renders about page', () => {
  const { getByText } = render(<About />);
  expect(getByText('Welcome to my website')).toBeInTheDocument();
});
