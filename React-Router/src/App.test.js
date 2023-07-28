import { render, screen } from '@testing-library/react';
import App from './MainRouting';

test('renders AdminDashboard link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AdminDashboard/i);
  expect(linkElement).toBeInTheDocument();
});
