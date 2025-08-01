"use client";

import { Typewriter } from "react-simple-typewriter";

const Typetitle = () => {
  return (
    <p className='text-base  font-mono block  text-white text-left'>
      <span className='text-pink-500'>&lt;span&gt;</span>
      Hi, I am{" "}
      <span className='text-lime-400'>
        <Typewriter
          words={["K K Singh"]}
          loop={5} // Infinite loop
          cursor
          cursorStyle='_'
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
        <span className='text-pink-500'>&lt;/span&gt;</span>
      </span>
    </p>
  );
};

export default Typetitle;
