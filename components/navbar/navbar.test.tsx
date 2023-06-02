import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Should render navbar', () => {
    const { container } = render(<Navbar />);

    const logoText = screen.getByText('Peoples App');
    expect(logoText).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
  });
});
