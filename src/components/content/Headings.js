import React from 'react';

function Header1({ children }) {
  return (
    <h1 className='font-title font-light text-center text-2xl sm:text-2xl md:text-4lg lg:text-6xl'>
      {children}
    </h1>
  );
}

export default Title;
