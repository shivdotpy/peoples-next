import { render, screen } from '@testing-library/react';
import Home from './page';
import RootLayout from './layout';

describe('Home Page', () => {
  it('Renders home page and show text Peoples', () => {
    render(<Home />);
  });
});
