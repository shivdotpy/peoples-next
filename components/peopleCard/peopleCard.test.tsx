import { render, screen } from '@testing-library/react';
import PeopleCard from './PeopleCard';

describe('People Card', () => {
  it('should render the component with the correct props', () => {
    const { name, email, avatar } = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatar: 'https://avatars.example.com/johndoe.jpg'
    };
    render(<PeopleCard name={name} email={email} avatar={avatar} />);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByText(email);
    expect(emailElement).toBeInTheDocument();
  });
});
