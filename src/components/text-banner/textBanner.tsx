import React from 'react';

const TextBanner:React.FC<{children}> = ({children}) => {

  return (
    <div className='width-full bg-bg-text-banner py-[92px] px-5 lg:py-40'>
      {children}
    </div>
  );
};

export default TextBanner;