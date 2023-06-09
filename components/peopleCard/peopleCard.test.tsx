import { render, screen } from '@testing-library/react';
import PeopleCard from './PeopleCard';

const peopleJson = {
  id: 1,
  email: 'michael.lawson@reqres.in',
  first_name: 'Michael',
  last_name: 'Lawson',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
};

describe('People Card', () => {
  test('Render people card', () => {
    render(<PeopleCard people={peopleJson} />);
  });

  test('displays the correct user information in the PeopleCard', () => {
    render(<PeopleCard people={peopleJson} />);
    const firstName = screen.getByText('Michael Lawson');
    expect(firstName).toBeInTheDocument();

    const email = screen.getByText('michael.lawson@reqres.in');
    expect(email).toBeInTheDocument();
  });
});
