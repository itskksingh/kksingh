import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import MarqueeRow from "../elements/Marquee";
import Section from "../elements/Section";
import Typetitle from "../elements/Typetitle";

const skills = [
  "/icons/nextjs-icon.svg",
  "/icons/react-js-icon.svg",
  "/icons/node-js-icon.svg",
  "/icons/tailwind-css-icon.svg",
  "/icons/mongodb-icon.svg",
];

const Hero = () => {
  return (
    <Section className='border border-[#3b413d]'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 '>
        {/* Profile Image */}
        <div className='flex-shrink-0 mb-8 lg:mb-0'>
          <Image
            src='/img/my-profile.png'
            width={450}
            height={450}
            alt='my-image'
            className='rounded-full object-cover '
            priority
          />
        </div>
        {/* Text Content */}
        <div className='flex-1 w-full flex flex-col items-start space-y-2 overflow-hidden'>
          <Typetitle />
          <h1 className='font-mono text-3xl  md:text-4xl  lg:text-5xl font-semibold capitalize  lg:text-left leading-tight text-white'>
            Senior <span className='text-linear-4'>{" {full stack} "}</span>
            web &amp; app developer.
          </h1>
          <p className='font-mono font-light text-sm md:text-lg text-white'>
            <span className='text-pink-500'>&lt;p&gt;</span>With expertise in cutting-edge technologies such as
            <span className='text-pink-500'> NextJs, React, NodeJS, Angular, and Tailwind</span>
            ... I deliver web solutions that are both innovative and robust.
            <span className='text-pink-500'>&lt;/p&gt;</span>
          </p>
          <div className='flex items-baseline w-full gap-5'>
            <MarqueeRow
              icons={skills}
              className='w-[60%] py-10'
              itemWidth='w-12 md:w-16'
              itemHeight='h-12 md:h-16'
              itemPadding='p-2 md:p-3'
            />
            <p className='self-baseline font-mono text-slate-400'>and more...</p>
          </div>

          <span className='font-mono text-slate-300 cursor-pointer'>
            <BiDownload className='inline text-lime-400 text-2xl mr-2' /> [Download my CV]
          </span>
        </div>
        {/* <Marquee icons={skills} /> */}
      </div>
    </Section>
  );
};

export default Hero;
