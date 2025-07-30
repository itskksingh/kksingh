import MarqueeRow from "./Marquee"; // adjust import path accordingly

const skills = [
  "/icons/nextjs-icon.svg",
  "/icons/react-js-icon.svg",
  "/icons/node-js-icon.svg",
  "/icons/tailwind-css-icon.svg",
  "/icons/mongodb-icon.svg",
  "/icons/angular-icon.svg",
  "/icons/vue-js-icon.svg",
  "/icons/mysql-icon.svg",
  "/icons/github-icon.svg",
];

const Techstack = ({ containerClass = "" }) => {
  // Dynamically split into two rows
  const mid = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, mid);
  const secondRow = skills.slice(mid);

  return (
    <div className={`space-y-6 overflow-hidden w-full flex flex-col items-center justify-center ${containerClass}`}>
      <MarqueeRow icons={firstRow} />
      <MarqueeRow icons={secondRow} direction='right' className='w-[80%]' />
    </div>
  );
};

export default Techstack;
