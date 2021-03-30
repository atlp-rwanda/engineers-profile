import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import { SearchOutlined } from '@ant-design/icons';

const locations = ['All Locations', 'Rwanda, Kigali'];
const skills = [
  'All Skills',
  'HTML/CSS',
  'Javascript',
  'Nodejs/Express',
  'Firebase',
  'PHP',
  'React',
  'Angular',
  'Python',
];

const ListFilter = () => {
  const [defaultSkill] = skills;
  const [defaultLocation] = locations;
  const [filters, setFilter] = useState({
    search: '',
    skill: defaultSkill,
    location: defaultLocation,
  });
  const getSelectedLocation = (location) => {
    setFilter({ ...filters, location });
  };
  const getSelectedSkill = (skill) => {
    setFilter({ ...filters, skill });
  };

  return (
    <div className='h-80 md:h-60 w-full bg-primary-100 flex items-center justify-center'>
      <div className='w-4/5 flex flex-col items-center justify-center gap-y-4  md:gap-y-8'>
        <div className='w-full text-lg md:text-2xl text-dark text-center'>
          <h1>Andela Technical Leadership Program (Rwanda)</h1>
          <h1>Engineer Profile</h1>
        </div>
        <div className='flex flex-col md:flex-row w-full gap-x-10 gap-y-4'>
          <div className='relative w-full h-full'>
            <input
              placeholder='Search'
              className=' text-dark px-3 py-2  border border-gray-300 bg-white outline-none w-full h-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            />
            <span className='absolute top-0 right-0 mr-3 h-full flex items-center'>
              <SearchOutlined />
            </span>
          </div>
          <Dropdown
            selected={filters.skill}
            options={skills}
            onSelect={getSelectedSkill}
          />
          <Dropdown
            selected={filters.location}
            options={locations}
            onSelect={getSelectedLocation}
          />
        </div>
      </div>
    </div>
  );
};

export default ListFilter;
