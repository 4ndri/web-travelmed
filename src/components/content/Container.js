import React from 'react';

function Container({ className, children }) {
  return (
    <div className="flex justify-center"><div className={`w-full max-w-4xl ${className}`}>{children}</div></div>
  );
}


export default Container;
