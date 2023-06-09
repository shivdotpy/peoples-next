'use client';

import PeopleCard from '@/components/peopleCard/PeopleCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export interface People {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const Peoples = () => {
  const [peoples, setPeoples] = useState([]);

  const getPeoplesApi = () => {
    axios
      .get('https://reqres.in/api/users?page=1&per_page=10')
      .then((response) => {
        setPeoples(response.data.data);
      });
  };

  useEffect(() => {
    getPeoplesApi();
  }, []);

  return (
    <div className="p-8 flex flex-wrap gap-5 justify-center">
      {peoples.map((people: People) => (
        <PeopleCard key={people.id} people={people} />
      ))}
    </div>
  );
};

export default Peoples;
