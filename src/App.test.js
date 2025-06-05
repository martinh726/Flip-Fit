import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add Timer button', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button', { name: /Add Timer/i });
  expect(buttons.length).toBeGreaterThan(0);
});
