import React from 'react';

function SubTitle({ children }) {
  return (
    <h1 className='font-title font-light text-center text-xl sm:text-2xl md:text-3lg lg:text-4xl'>
      {children}
    </h1>
  );
}

export default SubTitle;
