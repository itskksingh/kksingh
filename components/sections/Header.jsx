import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full px-4 py-3 lg:py-4 border border-zinc-600 bg-[#272730] rounded-lg max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 lg:w-[50px] lg:h-[50px]">
          <Image
            src="/img/kklogo.png"
            alt="kksingh-nextjs-developer-logo"
            fill
            priority
            sizes="50px"
            className="object-contain"
          />
        </div>
        <span className="text-lg lg:text-2xl font-mono font-semibold logo-name">
          kksingh.dev
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex gap-6 text-zinc-400 font-mono font-semibold flex-1 justify-center">
        <span className="hover:text-white cursor-pointer">About Me</span>
        <span className="hover:text-white cursor-pointer">Services</span>
        <span className="hover:text-white cursor-pointer">Portfolio</span>
        <span className="hover:text-white cursor-pointer">Pricing</span>
        <span className="hover:text-white cursor-pointer">Contact</span>
      </nav>

      {/* Social Icons */}
      <div className="hidden md:flex items-center gap-4 text-zinc-400">
        <FaFacebook className="hover:text-lime-400 cursor-pointer text-lg" />
        <FaInstagram className="hover:text-lime-400 cursor-pointer text-lg" />
        <FaGithub className="hover:text-lime-400 cursor-pointer text-lg" />
        <FaTwitter className="hover:text-lime-400 cursor-pointer text-lg" />
      </div>

      {/* Upwork Button */}
      <a
        href="https://www.upwork.com/freelancers/~yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-zinc-900 font-semibold px-4 py-2 rounded-xl text-sm transition"
      >
        <FaUpwork className="text-xl font-mono" />
        Hire Me
      </a>

      {/* Mobile Menu */}
      <div className="flex lg:hidden">
        <FiMenu className="text-zinc-200 text-3xl border border-zinc-400 p-1.5 rounded cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
