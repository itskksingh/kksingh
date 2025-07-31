import { FaReact } from "react-icons/fa";
import Section from "../elements/Section";

const Experience = () => {
  return (
    <section className='flex gap-8 flex-col md:flex-row '>
      <Section as='div' className='flex md:flex-3/2 relative overflow-hidden'>
        <h2 className='text-white text-3xl font-mono'>
          Trusted by more than 100+ <span className='text-slate-500'>companies worldwide_</span>{" "}
        </h2>
        <FaReact
          className='absolute -top-24 -right-24 text-[220px] text-[#576b55] animate-spin-slower opacity-10 pointer-events-none z-10'
          aria-hidden='true'
        />
      </Section>

      <Section as='div' animated={false}>
        <h2 className='text-white text-3xl font-mono'>
          Hello by <span className='text-slate-500'>kksingh_</span>{" "}
        </h2>
      </Section>
    </section>
  );
};

export default Experience;
