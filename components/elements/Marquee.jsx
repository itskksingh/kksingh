// MarqueeRow.jsx
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeRow = ({
  icons,
  speed = 40,
  direction = "left",
  className = "",
  itemWidth = "w-16 md:w-20", // default Tailwind classes
  itemHeight = "h-16 md:h-20", // default Tailwind classes
  itemPadding = "p-3 md:p-4", // allow customizable padding too!
}) => (
  <div className={` ${className}`}>
    <Marquee pauseOnHover={true} speed={speed} direction={direction}>
      <div className='flex items-center gap-6 px-4'>
        {icons.map((src, idx) => (
          <div
            key={idx}
            className={`${itemWidth} ${itemHeight} ${itemPadding} flex items-center justify-center rounded-lg border border-gray-600 bg-[#1f1f26] hover:bg-[#24242b] transition-transform duration-300 cursor-pointer`}
            title='tech-icon'>
            <Image src={src} alt='tech-icon' width={40} height={40} className='object-contain w-full h-full' />
          </div>
        ))}
      </div>
    </Marquee>
  </div>
);

export default MarqueeRow;
