import React, { useEffect, useState } from 'react';
import ListFilter from './ListFilter';
import ProfileCard from './ProfileCard';
import { api } from '../../utils';
import { InfoCircleOutlined } from '@ant-design/icons';

const EngineerList = () => {
  const [engineers, setEngineers] = useState([]);

  useEffect(() => {
    fetchEngineers();
    // eslint-disable-next-line
  }, []);

  const fetchEngineers = async () => {
    try {
      const res = await api.get('/users');
      const { data } = res;
      setEngineers([...engineers, ...data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <ListFilter />
      <div className='w-4/5 min-h-full mt-10 md:mt-20 flex justify-center '>
        {[engineers].length ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-x-10 gap-y-14'>
            {engineers.map((data, index) => (
              <ProfileCard key={data.id} id={index} data={data} />
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center w-60 rounded-lg p-4 border border-gray-200 gap-x-2'>
            <InfoCircleOutlined /> No Engineer Data
          </div>
        )}
      </div>
    </div>
  );
};

export default EngineerList;
