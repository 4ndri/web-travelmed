import React from 'react';

function Title({ children }) {
  return (
    <h1 className='font-title font-light text-center text-2xl sm:text-2xl md:text-4lg lg:text-6xl'>
      {children}
    </h1>
  );
}

export default Title;
