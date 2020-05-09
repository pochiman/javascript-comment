import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders comment', () => {
  const { getByText } = render(<App />);
  const name = getByText(/Brad/i);
  expect(name).toBeInTheDocument();
});
