import Hero from "../components/sections/Hero.jsx";
import Myskills from "../components/sections/Myskills.jsx";

const Homepage = () => {
  return (
    <div className='w-full max-w-7xl mx-auto p-4 lg:p-8 space-y-5'>
      <Hero />
      <Myskills />
    </div>
  );
};

export default Homepage;
