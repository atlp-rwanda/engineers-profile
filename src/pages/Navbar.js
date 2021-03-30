import React from 'react';
import AndelaLogo from '../assets/images/logo_andela-blue.svg';

const Navbar = () => {
  return (
    <div className='bg-white h-20 px-4 md:px-8 flex items-center justify-between '>
      <div className='h-full flex items-center '>
        <img className='h-1/3 md:h-3/5' src={AndelaLogo} alt='' />
      </div>

      <ul className='flex gap-x-3 md:gap-x-6 text-center items-center font-normal tracking-wide text-dark text-sm md:text-base'>
        <li className='bg-primary-200 px-3 py-3 md:px-8 md:py-3 text-white font-light'>
          Hire Talent
        </li>
        <li className='hidden lg:block'>Join Andela</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default Navbar;
