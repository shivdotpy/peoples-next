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
    // test('Render people card', () => {
    //     render(<PeopleCard first_name='shiv' last_name='sharma' email='shiv@gmail.com' avatar='https://i.pravatar.cc/300' />);
    // });

    // test('displays the correct user information in the PeopleCard', () => {
    //     render(<PeopleCard first_name='shiv' last_name='sharma' email='shiv@gmail.com' avatar='https://i.pravatar.cc/300' />);
    //     const firstName = screen.getByText('Michael Lawson');
    //     expect(firstName).toBeInTheDocument();

    //     const email = screen.getByText('michael.lawson@reqres.in');
    //     expect(email).toBeInTheDocument();
    // });
});
