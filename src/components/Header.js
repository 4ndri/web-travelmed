import React from 'react';

function Header({ className, height, backgroundSize, headerImg, children }) {
  return (
    <header
      className={`mt-0 flex items-center w-full justify-center ${className || ''}`}
      style={{
        height:height || '400px',
        backgroundImage: `url(${
          (headerImg &&
            !!headerImg.childImageSharp &&
            headerImg.childImageSharp.fluid &&
            headerImg.childImageSharp.fluid.src) ||
          headerImg ||
          '/img/home-katse.jpg'
        })`,
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `auto ${backgroundSize || '450px'}`,

        
      }}
    >
      <div
        style={{
          display: 'flex',
          height: height || '400px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          background: 'inherit',
        }}
      >
        {children}
      </div>
    </header>
  );
}

export default Header;
