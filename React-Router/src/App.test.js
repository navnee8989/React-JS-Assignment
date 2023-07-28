import { render, screen } from '@testing-library/react';
import App from './MainRouting';

<<<<<<< HEAD
test('renders AdminDashboard link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AdminDashboard/i);
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
>>>>>>> 05b544bc74cb53b5da2d0e1b8128dcff88daea2a
  expect(linkElement).toBeInTheDocument();
});
