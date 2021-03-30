import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ className, selected, options, onSelect, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);

  useEffect(() =>
    window.addEventListener('click', (ev) => {
      if (button.current && button.current.contains(ev.target)) {
        setIsOpen(!isOpen);
      } else {
        setIsOpen(false);
      }
    })
  );

  return (
    <div className={`${className} relative inline-block w-full`}>
      <div>
        <button
          type='button'
          class='flex justify-between w-full  border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
          id='options-menu'
          aria-expanded='false'
          aria-haspopup='false'
          ref={button}
        >
          {selected}
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56  shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50 ${
          isOpen ? 'block' : 'hidden'
        }  `}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='options-menu'
      >
        <div className='py-1' role='none'>
          {options.map((option) => (
            <span
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
              onClick={() => onSelect(option)}
            >
              {option}
            </span>
          ))}
        </div>
        <div class='py-1' role='none'>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
