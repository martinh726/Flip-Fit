import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add Timer button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Add Timer/i });
  expect(buttonElement).toBeInTheDocument();
});
