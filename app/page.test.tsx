import { render, screen } from '@testing-library/react';
import Home from './page';

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
