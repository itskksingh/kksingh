// import { CgWebsite } from "react-icons/cg";
// import { LuDatabaseZap } from "react-icons/lu";
// import { MdApi } from "react-icons/md";
// import { IoSpeedometerOutline } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
// import { GiArtificialIntelligence } from "react-icons/gi";
import Section from "../elements/Section";
import Servicecard from "../elements/Servicecard";

import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoCartOutline, IoSpeedometerOutline } from "react-icons/io5";
import { MdApi, MdOutlineDesignServices } from "react-icons/md";

const myServices = [
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
    id: 3,
    icon: MdApi,
    title: "API Development",
    content: (
      <>
        I create robust and scalable REST & GraphQL APIs using <span>Node.js</span>, <span>Express</span>, and{" "}
        <span>MongoDB</span>.
      </>
    ),
  },
  {
    id: 4,
    icon: MdOutlineDesignServices,
    title: "Website Redesign",
    content: (
      <>Upgrade your outdated website into a modern, high-converting design that reflects your brand and goals.</>
    ),
  },
  {
    id: 5,
    icon: IoCartOutline,
    title: "E-Commerce Solutions",
    content: (
      <>
        Launch or improve your online store using secure and scalable tech like <span>Shopify</span>,{" "}
        <span>WooCommerce</span>, or <span>custom React solutions</span>.
      </>
    ),
  },
  {
    id: 6,
    icon: IoSpeedometerOutline,
    title: "Performance Optimization",
    content: (
      <>
        I optimize your website’s speed, Core Web Vitals, and <span>SEO to improve</span> rankings and conversions.
      </>
    ),
  },
];

const Services = () => (
  <Section as='div' className='items-center text-center flex flex-col max-w-7xl mx-auto'>
    <h3 className='section-mini-title mb-2'>Services</h3>
    <h2 className='section-title max-w-2xl'>
      Designing solutions customized <span>to meet your requirements</span>
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 w-full mt-10 p-2'>
      {myServices.map((ser) => (
        <Servicecard icon={ser.icon} title={ser.title} content={ser.content} key={ser.id} />
      ))}
    </div>
  </Section>
);

export default Services;
