// src/pages/Services.test.tsx
import { render } from '@testing-library/react';
import Services from './Services';

test('renders services page', () => {
  const { getByText } = render(<Services />);
  expect(getByText('Welcome to my website')).toBeInTheDocument();
});
