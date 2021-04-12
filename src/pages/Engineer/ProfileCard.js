import React from 'react';

const ProfileCard = ({ data }) => {
  const fullName =
    data.first_name && data.last_name
      ? `${data.first_name}  ${data.last_name}`
      : '';
  const profilePhoto = data.profile_photo.url ? data.profile_photo.url : '';
  const bio = data.bio ? data.bio : '';
  const email = data.email ? data.email : '';
  const mobile = data.mobile_no ? `+${data.mobile_no}` : '';
  const companyName = data.company ? data.company.name : '';
  const companyLogo = data.company.logo.url ? data.company.logo.url : '';
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
          <h1 className='mt-14 font-medium'>{fullName}</h1>
        </div>
        <div className='relative text-dark text-sm mt-4 mx-4'>
          <figcaption className='mb-4'>
            <div className='text-gray-500 uppercase text-xs font-semibold'>
              Skills
            </div>
            <div className='mt-1 flex flex-wrap gap-x-2 gap-y-2 text-tiny'>
              {data.skills.length
                ? data.skills.map((skill) => (
                    <span className='bg-gray-200 px-2 py-1' key={skill.id}>
                      {skill.name.toUpperCase()}
                    </span>
                  ))
                : null}
            </div>
          </figcaption>

          <figcaption className='mb-4'>
            <div className='text-gray-500 uppercase text-xs font-semibold'>
              Bio
            </div>
            <div className='mt-1 flex flex-wrap gap-x-2 gap-y-2'>
              <p className='text-xs'>{bio}</p>
            </div>
          </figcaption>
          <figcaption className='mb-4'>
            <div className='text-gray-500 uppercase text-xs font-semibold'>
              Engineering Experience
            </div>
            <div className='mt-1 flex justify-between items-center'>
              <p className='text-xs'>
                <span className='font-normal text-gray-500'>Company:</span>{' '}
                {companyName}
                <br />
                <span className='font-normal text-gray-500'>Duration:</span> 3
                Month
              </p>
              <div className='h-10 w-10 flex justify-center items-center'>
                <img
                  className=' w-full h-full  cover bg-center'
                  src={companyLogo}
                  alt='profile'
                />
              </div>
            </div>
          </figcaption>
          <figcaption className='mb-4'>
            <div className='text-gray-500 uppercase text-xs font-semibold'>
              Contact
            </div>
            <div className='mt-1 flex'>
              <p className='text-xs'>
                <span className='font-normal text-gray-500'>Email: </span>
                {email}
                <br />
                <span className='font-normal text-gray-500'>Mobile:</span>
                {mobile}
              </p>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
