import Image from 'next/image';
import React from 'react';

const PeopleCard = () => {
  const sampleJson = {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  };

  return (
    <div className="bg-orange-400 rounded-md w-60 h-80 flex flex-col p-1">
      <div className="flex-grow bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
        <Image
          src={sampleJson.avatar}
          alt="avatar"
          height={200}
          width={200}
          className="rounded-full"
        />
      </div>
      <div>
        <h5 className="text-md flex text-center justify-center">{`${sampleJson.first_name} ${sampleJson.last_name}`}</h5>
        <div className="flex text-center justify-center">
          <span className="text-sm">{sampleJson.email}</span>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
