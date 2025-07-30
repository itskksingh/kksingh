// components/IconBox.jsx
import React from "react";

const IconBox = ({ Icon, className = "" }) => {
  return (
    <div className='h-16 w-16 flex items-center justify-center text-gray-700'>
      <Icon className={`w-10 h-10 ${className}`} />
    </div>
  );
};

export default IconBox;
