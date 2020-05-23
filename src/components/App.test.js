import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crash', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Demos/i);
  expect(linkElement).toBeInTheDocument();
});
