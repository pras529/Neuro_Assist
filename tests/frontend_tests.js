import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../frontend/web/src/components/Navbar';
import Footer from '../frontend/web/src/components/Footer';
import Dashboard from '../frontend/web/src/pages/dashboard';
import Login from '../frontend/web/src/pages/login';

describe('Frontend Component Tests', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  test('renders Dashboard page', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Welcome to Dashboard/i)).toBeInTheDocument();
  });

  test('renders Login page', () => {
    render(<Login />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
