import React from 'react';

function PageSection({ className, children }) {
  return (
    <section className={`py-4 ${className}`}>
      {children}
    </section>
  );
}

export default PageSection;
