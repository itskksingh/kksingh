import Section from "../elements/Section";

import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Servicecard from "../elements/Servicecard";

const ser1 = {
  id: 1,
  icon: CgWebsite,
  title: "Web & App Development",
  content: (
    <>
      I build responsive, fast, and user-friendly websites & apps using <span>React</span>, <span>Next.js</span>, and
      modern technologies.
    </>
  ),
};

const ser2 = {
  id: 2,
  icon: GiArtificialIntelligence,
  title: "AI Integration",
  content: (
    <>
      Enhance your product with AI-powered features like chatbots, automation, and smart analytics using{" "}
      <span>OpenAI</span> & <span>third-party APIs</span>.
    </>
  ),
};

const ser3 = {
  id: 6,
  icon: IoSpeedometerOutline,
  title: "Performance Optimization",
  content: <>I optimize your website’s speed, Core Web Vitals, and SEO to improve rankings and conversions.</>,
};

const Projects = () => {
  return (
    <Section
      as='div'
      animated={false}
      className="overflow-hidden border-1 border-zinc-600 bg-[url('/img/line-bg.png')] bg-cover bg-center">
      <h3 className='section-mini-title mb-2'>Projects</h3>{" "}
      <h2 className='section-title max-w-2xl'>
        My Recent <span>Projects</span>
      </h2>
      <Carousel className='relative text-white'>
        <CarouselContent>
          <CarouselItem>
            <Servicecard icon={ser1.icon} title={ser1.title} content={ser1.content} />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Servicecard icon={ser2.icon} title={ser2.title} content={ser2.content} />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Servicecard icon={ser3.icon} title={ser3.title} content={ser3.content} />
          </CarouselItem>
        </CarouselContent>
        <div className='absolute right-15 bottom-10'>
          <CarouselPrevious className='absolute' />
          <CarouselNext className='absolute' />
        </div>
      </Carousel>
    </Section>
  );
};

export default Projects;
