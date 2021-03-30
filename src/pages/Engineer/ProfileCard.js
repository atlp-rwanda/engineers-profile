import React from 'react';
import { name, company, internet, phone } from 'faker';
import randomAcmeLogo from 'random-acme-logos';

const ProfileCard = ({ id }) => {
  const username = name.findName();
  const companyName = company.companyName();
  const profilePhoto = internet.avatar();
  const userEmail = internet.email();
  const userPhone = phone.phoneNumber();
  const logo = randomAcmeLogo();
  return (
    <div className='relative  max-w-xx'>
      <div className='relative min-h-xx w-full bg-white shadow-md pb-2'>
        <div className='relative w-full flex justify-center'>
          <div className='absolute rounded-full h-20 w-20 bg-purple-100 -top-8'>
            <img
              className=' w-full h-full rounded-full cover bg-center'
              src={profilePhoto}
              alt='profile'
            />
          </div>
          <h1 className='mt-14 font-medium'>{username}</h1>
        </div>
        <div className='relative text-dark text-sm mt-4 mx-4'>
          <figcaption class='mb-4'>
            <div class='text-gray-500 uppercase text-xs font-semibold'>
              Skills
            </div>
            <div class='mt-1 flex flex-wrap gap-x-2 gap-y-2 text-tiny'>
              <span className='bg-gray-200 px-2 py-1'>HTML</span>
              <span className='bg-gray-200 px-2 py-1'>CSS</span>
              <span className='bg-gray-200 px-2 py-1'>Javascript</span>
              <span className='bg-gray-200 px-2 py-1'>Python</span>
              <span className='bg-gray-200 px-2 py-1'>Docker</span>
            </div>
          </figcaption>

          <figcaption class='mb-4'>
            <div class='text-gray-500 uppercase text-xs font-semibold'>Bio</div>
            <div class='mt-1 flex flex-wrap gap-x-2 gap-y-2'>
              <p className='text-xs'>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever sis
              </p>
            </div>
          </figcaption>
          <figcaption class='mb-4'>
            <div class='text-gray-500 uppercase text-xs font-semibold'>
              Engineering Experience
            </div>
            <div class='mt-1 flex justify-between items-center'>
              <p className='text-xs'>
                <span className='font-normal text-gray-500'>Company:</span>{' '}
                {companyName}
                <br />
                <span className='font-normal text-gray-500'>Duration:</span> 3
                Month
              </p>
              <div className='h-10 w-10 bg-purple-100 -top-8'>
                <img
                  className=' w-full h-full  cover bg-center'
                  src={logo}
                  alt='profile'
                />
              </div>
            </div>
          </figcaption>
          <figcaption class='mb-4'>
            <div class='text-gray-500 uppercase text-xs font-semibold'>
              Contact
            </div>
            <div class='mt-1 flex'>
              <p className='text-xs'>
                <span className='font-normal text-gray-500'>Email: </span>
                {userEmail}
                <br />
                <span className='font-normal text-gray-500'>Mobile:</span>
                {userPhone}
              </p>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
