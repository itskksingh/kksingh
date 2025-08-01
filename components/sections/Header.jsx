import Image from "next/image";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between max-w-7xl rounded-lg bg-[#272730] border border-[#3b413d] py-4 px-5'>
      <span className='flex gap-2 items-center'>
        <Image
          src={"/img/kklogo.png"}
          width={40}
          height={70}
          quality={100}
          className='object-contain'
          alt='kksingh-nextjs-developer-logo'
        />{" "}
        <span className='logo-name text-xl font-mono font-semibold'> kksingh.dev</span>
      </span>
      <FiMenu className='text-white text-3xl' />
    </header>
  );
};

export default Header;
