import Image from "next/image";
import Marquee from "../elements/Marquee";
import Section from "../elements/Section";

const skills = [
  "/icons/nextjs-icon.svg",
  "/icons/react-js-icon.svg",
  "/icons/node-js-icon.svg",
  "/icons/tailwind-css-icon.svg",
  "/icons/mongodb-icon.svg",
];

const Hero = () => {
  return (
    <Section animated={false}>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 px-5'>
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
        <div className='flex-1 w-full flex flex-col items-start space-y-2 '>
          <p className='text-base sm:text-lg font-mono block text-center lg:text-left'>
            <span className='text-pink-500'>&lt;span&gt;</span>
            Hey, I&apos;m <span className='font-bold'>K K Singh</span>
            <span className='text-pink-500'>&lt;/span&gt;</span>
          </p>
          <h1 className='font-mono text-3xl sm:text-4xl md:text-5xl font-semibold capitalize  lg:text-left leading-tight'>
            Senior <span className='text-linear-4'>{" {full stack} "}</span>
            web &amp; app developer.
          </h1>
          <p className='font-mono text-base md:text-lg'>
            With expertise in cutting-edge technologies such as{" "}
            <span className='text-pink-500'>NodeJS, React, Angular, and Laravel</span>
            ... I deliver web solutions that are both innovative and robust.
          </p>
        </div>
        {/* <Marquee icons={skills} /> */}
      </div>
    </Section>
  );
};

export default Hero;
