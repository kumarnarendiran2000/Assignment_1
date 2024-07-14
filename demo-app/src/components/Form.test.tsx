// src/components/Form.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { vi } from 'vitest';

test('submits the form', async () => {
  // Mock the alert function
  vi.spyOn(window, 'alert').mockImplementation(() => {});
  
  // Create a mock response object
  const mockResponse = {
    ok: true,
    json: () => Promise.resolve({}),
    headers: new Headers(),
    redirected: false,
    status: 200,
    statusText: 'OK',
    type: 'basic',
    url: '',
    clone: function() { return this; },
    body: null,
    bodyUsed: false,
    text: () => Promise.resolve(''),
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData())
  } as Response;

  // Mock the fetch function
  vi.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve(mockResponse)
  );

  render(<Form />);

  await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
  await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@example.com');
  await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message');

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(window.alert).toHaveBeenCalledWith('Data submitted successfully');

  // Restore all mocks
  vi.restoreAllMocks();
});
