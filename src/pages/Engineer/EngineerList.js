import React from 'react';
import ListFilter from './ListFilter';
import ProfileCard from './ProfileCard';

const EngineerList = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <ListFilter />
      <div className='w-4/5 min-h-full mt-20 flex justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-x-10 gap-y-14'>
          {[...Array(10).keys()].map((data, index) => (
            <ProfileCard id={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineerList;
