// src/components/Header.test.tsx
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header with title', () => {
  const { getByText } = render(<Header />);
  expect(getByText('My Website')).toBeInTheDocument();
});
