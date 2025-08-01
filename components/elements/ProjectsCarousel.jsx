"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Servicecard from "../elements/Servicecard";
import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";

const services = [
  {
    id: 1,
    icon: CgWebsite,
    title: "Web & App Development",
    content: (
      <>
        I build responsive, fast, and user-friendly websites & apps using <span>React</span>, <span>Next.js</span>, and
        modern technologies.
      </>
    ),
  },
  {
    id: 2,
    icon: GiArtificialIntelligence,
    title: "AI Integration",
    content: (
      <>
        Enhance your product with AI-powered features like chatbots, automation, and smart analytics using{" "}
        <span>OpenAI</span> & <span>third-party APIs</span>.
      </>
    ),
  },
  {
    id: 6,
    icon: IoSpeedometerOutline,
    title: "Performance Optimization",
    content: <>I optimize your website’s speed, Core Web Vitals, and SEO to improve rankings and conversions.</>,
  },
];

const ProjectsCarousel = () => {
  const plugin = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      className="relative text-white overflow-hidden"
      plugins={[plugin.current]}
      loop
      opts={{
        align: "center",
        skipSnaps: false,
      }}
    >
      <CarouselContent
        className="[&>*]:transition-all [&>*]:duration-700 [&>*]:ease-in-out"
      >
        {services.map((service) => (
          <CarouselItem
            key={service.id}
            className="basis-full opacity-0 animate-fade-in"
          >
            <Servicecard
              icon={service.icon}
              title={service.title}
              content={service.content}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute right-10 bottom-10 flex gap-2 z-10">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectsCarousel;
