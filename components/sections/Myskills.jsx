import { FaReact } from "react-icons/fa";
import Expertise from "../elements/Expertise";
import Section from "../elements/Section.jsx";
import TechStack from "../elements/Techstack.jsx";

const Myskills = () => {
  return (
    <Section as='div' className='relative overflow-hidden'>
      <div className='text-center'>
        <h3 className='font-mono text-sm text-[#a8ff53] mb-2'>Skills</h3>
        <h2 className='font-sans text-2xl md:text-3xl lg:text-4xl font-medium text-white'>My Techstacks</h2>
      </div>

      <div className='flex flex-col md:flex-row divide-[#525259] md:divide-x-1 mt-10  w-full'>
        {/* Left: TechStack */}
        <div className='flex-1 px-3 lg:px-10 flex items-center overflow-hidden w-full'>
          <TechStack />
        </div>
        {/* Right: Custom content */}
        <div className='flex-1 flex flex-col items-center justify-center p-7 pb-5 w-full'>
          <Expertise />
        </div>
      </div>

      <FaReact
        className='absolute -top-24 -right-24 text-[220px] text-[#576b55] animate-spin-slower opacity-10 pointer-events-none z-10'
        aria-hidden='true'
      />
    </Section>
  );
};

export default Myskills;
