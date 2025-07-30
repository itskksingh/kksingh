import Image from "next/image";
import Marquee from "react-fast-marquee";
const skills = [
  "/icons/nextjs-icon.svg",
  "/icons/react-js-icon.svg",
  "/icons/node-js-icon.svg",
  "/icons/tailwind-css-icon.svg",
  "/icons/mongodb-icon.svg",
  "/icons/angular-icon.svg",
  "/icons/vue-js-icon.svg",
  "/icons/mysql-icon.svg",
  "/icons/google-firebase-icon.svg",
];

const Techstack = () => {
  return (
    <div className='mt-5 space-y-4 w-full flex flex-col items-center justify-center '>
      {/* Marquee 1 */}
      <div className="w-full">
        <Marquee pauseOnHover={true} speed={40}>
          <div className='flex items-center gap-6 px-4 overflow-hidden'>
            {skills.slice(0, 5).map((src, index) => (
              <div
                key={index}
                className='w-15 h-15 md:w-20 md:h-20 p-3 md:p-4 flex hover:scale-105  justify-center border border-gray-600 rounded-lg bg-[#1f1f26] hover:bg-[24242b] transition-transform duration-300'>
                <Image src={src} alt='tech-icon' width={40} height={40} className='object-contain' />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className='w-[80%]'>
        <Marquee speed={40} direction='right' pauseOnHover={true}>
          <div className='flex items-center gap-6  px-3 overflow-hidden'>
            {skills.slice(5).map((src, index) => (
              <div
                key={index}
                className='w-15 h-15 md:w-20 md:h-20 p-3 md:p-4 rounded-lg border border-gray-600 bg-[#1f1f26] hover:bg-[24242b] flex  justify-center hover:scale-105 transition-transform duration-300'>
                <Image src={src} alt='tech-icon' width={40} height={40} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Techstack;
