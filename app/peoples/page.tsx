import PeopleCard from '@/components/PeopleCard/PeopleCard';
import React from 'react';

const Peoples = () => {
  return (
    <div className="p-8 flex flex-wrap gap-6 justify-center">
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </div>
  );
};

export default Peoples;
