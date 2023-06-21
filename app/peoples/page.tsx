'use client';

import { getPoeplesApi } from '@/api/peoples.api';
import PeopleCard from '@/components/peopleCard/PeopleCard';
import React, { useEffect, useState } from 'react';

const Peoples = () => {
  const [peoples, setPeoples] = useState([]);

  const getPoeples = () => {
    getPoeplesApi()
      .then((data) => setPeoples(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPoeples();
  }, []);

  return (
    <div className="p-8 flex gap-4 flex-wrap">
      {peoples.map(({ id, name, email }) => (
        <PeopleCard
          key={id}
          name={name}
          avatar={`https://i.pravatar.cc/150?img=${id}`}
          email={email}
        />
      ))}
    </div>
  );
};

export default Peoples;
