import React from 'react';

function Container({ children }) {
  return (
    <div className="flex justify-center"><div className="ndri-container">{children}</div></div>
  );
}


export default Container;
