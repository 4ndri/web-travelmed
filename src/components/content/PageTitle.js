import React from 'react';

function ContentTitle({ children }) {
  return (
    <h1 className='font-title font-light text-2xl sm:text-xl2 md:text-2xl lg:text-3xl'>
      {children}
    </h1>
  );
}

export default ContentTitle;
