import React from 'react';


export function ContainerPosition({ className, children }) {
  return (
    <div className="flex justify-center"><div className={`w-full max-w-4xl ${className}`}>{children}</div></div>
  );
}

function Container({ className, children }) {
  return (
    <ContainerPosition className={`p-2 ${className}`}>{children}</ContainerPosition>
  );
}

export default Container;
