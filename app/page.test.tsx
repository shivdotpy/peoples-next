import { render, screen } from '@testing-library/react';
import Home from './page';
import RootLayout from './layout';

describe('Home Page - Landing Page', () => {
  test('renders the heading', () => {
    render(<Home />);
    const heading = screen.getByText('Welcome to peoples page');
    expect(heading).toBeInTheDocument();
  });

  test('renders the link with correct text content', () => {
    render(<Home />);
    const link = screen.getByText('Explore Peoples');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/peoples');
  });

  test('renders the image with correct attributes', () => {
    render(<Home />);
    const image = screen.getByAltText('peoples');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('height', '500');
    expect(image).toHaveAttribute('width', '500');
  });

  test('renders the footer text', () => {
    render(<Home />);
    const footer = screen.getByText(
      '© 2023 Peoples App. No rights reserved. 😂'
    );
    expect(footer).toBeInTheDocument();
  });
});
