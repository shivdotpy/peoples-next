import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Should render navbar', () => {
    render(<Navbar />);
  });

  test('renders the Navbar logo with the correct text', () => {
    render(<Navbar />);
    const logoText = screen.getByText('Peoples');
    expect(logoText).toBeInTheDocument();
  });

  test('renders the Navbar with the correct number of navigation links', () => {
    render(<Navbar />);
    const navigationLinks = screen.getAllByRole('link');
    expect(navigationLinks).toHaveLength(3);
  });

  test('renders the Navbar navigation links with correct href attributes', () => {
    render(<Navbar />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toHaveAttribute('href', '/contact');

    const settingsLink = screen.getByRole('link', { name: 'Settings' });
    expect(settingsLink).toHaveAttribute('href', '/settings');
  });
});
