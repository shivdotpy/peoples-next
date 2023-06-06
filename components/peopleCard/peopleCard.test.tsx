import { render, screen } from '@testing-library/react';
import PeopleCard from './PeopleCard';

describe('People Card', () => {
  test('Render people card', () => {
    render(<PeopleCard />);
  });

  test('displays the correct user information in the PeopleCard', () => {
    render(<PeopleCard />);
    const firstName = screen.getByText('Michael Lawson');
    expect(firstName).toBeInTheDocument();

    const email = screen.getByText('michael.lawson@reqres.in');
    expect(email).toBeInTheDocument();
  });
});
