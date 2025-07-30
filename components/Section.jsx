import React from "react";

const Section = ({ children }) => {
  return (
    <section className='border border-[#3b413d] rounded-lg w-full'>
      <div className='bg-[#272730] relative flex flex-col items-center justify-center w-full py-10 rounded-lg borderbox-animated z-20 overflow-hidden'>
        {children}
      </div>
    </section>
  );
};

export default Section;
