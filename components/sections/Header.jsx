import Image from "next/image";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between max-w-7xl rounded-lg bg-[#272730] border border-zinc-600 py-5 px-5">
      <span className="flex items-center gap-3">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/img/kklogo.png"
            alt="kksingh-nextjs-developer-logo"
            fill
            priority
            sizes="50px"
            className="object-contain"
          />
        </div>
        <span className="logo-name text-2xl font-mono font-semibold">kksingh.dev</span>
      </span>
      <FiMenu className="text-zinc-200 text-4xl border border-zinc-400 p-1.5 rounded self-center cursor-pointer" />
    </header>
  );
};

export default Header;
