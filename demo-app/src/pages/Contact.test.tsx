// src/pages/Contact.test.tsx
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';

test('renders contact page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  expect(getByText('Contact Us')).toBeInTheDocument();
  expect(getByText('Fill out the contact form')).toBeInTheDocument();
});
