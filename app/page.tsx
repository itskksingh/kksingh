import Experience from "../components/sections/Experience.jsx";
import Hero from "../components/sections/Hero.jsx";
import Myskills from "../components/sections/Myskills.jsx";
import Overview from "../components/sections/Overview.jsx";
import Services from "../components/sections/Services.jsx";
// import Header from "../components/sections/Header.jsx";

const Homepage = () => {
  return (
    <div className='w-full max-w-lg md:max-w-5xl lg:max-w-7xl mx-auto p-2 md:p-4 lg:p-8  space-y-8'>
      <Hero />
      <Overview/>
      <Myskills />
      <Experience />
      <Services/>
    </div>
  );
};

export default Homepage;
