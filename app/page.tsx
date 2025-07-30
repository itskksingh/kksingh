import { FaReact } from "react-icons/fa";
import Expertise from "../components/Expertise.jsx";
import TechStack from "../components/Techstack.jsx";

const Homepage = () => {
  return (
    <div className='w-full max-w-7xl mx-auto p-4 lg:p-8'>
      <div className='border border-[#3b413d] rounded-lg w-full'>
        <div className='bg-[#272730] relative flex flex-col items-center justify-center w-full py-10 rounded-lg borderbox-animated z-20 overflow-hidden'>
          <div className='text-center'>
            <h3 className='font-mono text-sm text-[#a8ff53] mb-2'>Skills</h3>
            <h2 className='font-sans text-2xl md:text-3xl lg:text-4xl font-medium text-white'>My Techstacks</h2>
          </div>

          <div className='flex flex-col lg:flex-row divide-[#525259] divide-x-1 lg:mt-10  w-full'>
            {/* Left: TechStack */}
            <div className='flex-1 px-5 lg:px-15 flex items-center overflow-hidden w-full'>
              <TechStack />
            </div>
            {/* Right: Custom content */}
            <div className='flex-1 flex flex-col items-center justify-center p-10 pb-5 w-full'>
              <Expertise />
            </div>
          </div>

          {/* Background React Icon */}
          <FaReact className='absolute -top-24 -right-24 text-[220px] text-[#576b55] animate-spin-slower opacity-10 pointer-events-none' />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
