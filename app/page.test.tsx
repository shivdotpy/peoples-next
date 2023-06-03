import { render, screen } from '@testing-library/react';
import Home from './page';
import RootLayout from './layout';

describe('Home Page', () => {
  it('Renders home page and show text Peoples', () => {
    const { container } = render(<Home />);

    // Get text
    const text = screen.getByText('Peoples');

    // Test if exists
    expect(text).toBeInTheDocument();

    // Check Snapshot
    expect(container).toMatchSnapshot();
  });
});

describe('Home page layout', () => {
  it('Renders home page layout', () => {
    const container = render(<RootLayout children={<Home />} />);
  });
});
