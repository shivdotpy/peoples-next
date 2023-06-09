import { render, waitFor, screen } from '@testing-library/react';
import Peoples, { People } from './page';

describe('Peoples Page', () => {
  test('renders the Peoples component without errors', () => {
    render(<Peoples />);
  });
});
