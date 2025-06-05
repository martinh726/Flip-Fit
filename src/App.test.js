import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Add Timer button is present and does not flip card', () => {
  const { container } = render(<App />);
  const card = container.querySelector('.flip-card');
  const inner = container.querySelector('.flip-card-inner');

  fireEvent.click(card);
  expect(inner.classList.contains('flipped')).toBe(true);

  const buttonElement = screen.getByRole('button', { name: /Add Timer/i });
  fireEvent.click(buttonElement);
  expect(inner.classList.contains('flipped')).toBe(true);
});
