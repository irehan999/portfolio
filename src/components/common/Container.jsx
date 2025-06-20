import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full max-w-screen-lg mx-auto px-6 md:px-10 lg:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;