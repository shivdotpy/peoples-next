import Image from 'next/image';
import React from 'react';

interface People {
  name: string;
  email: string;
  avatar: string;
}

const PeopleCard: React.FC<People> = ({ name, email, avatar }) => {
  return (
    <div className="bg-orange-400 rounded-md w-60 h-80 flex flex-col p-1">
      <div className="flex-grow bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
        <Image
          src={avatar}
          alt="avatar"
          height={200}
          width={200}
          className="rounded-full"
        />
      </div>
      <div>
        <h5 className="text-md flex text-center justify-center">{name}</h5>
        <div className="flex text-center justify-center">
          <span className="text-sm">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
