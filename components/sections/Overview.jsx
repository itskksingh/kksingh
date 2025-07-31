'use client'

import { FiAward, FiCrop, FiHeart, FiMonitor } from "react-icons/fi"; // Example icons
import Section from "../elements/Section";
import CountUp from "react-countup";

const stats = [
  { icon: <FiCrop className="text-lime-400 text-3xl mb-2" />, value: 12, label: "Year Experience" },
  { icon: <FiMonitor className="text-lime-400 text-3xl mb-2" />, value: 250, label: "Projects Completed" },
  { icon: <FiHeart className="text-lime-400 text-3xl mb-2" />, value: 680, label: "Satisfied Clients" },
  { icon: <FiAward className="text-lime-400 text-3xl mb-2" />, value: 18, label: "Awards Winner" },
];

const Overview = () => {
  return (
    <Section as='div' animated={false} className="bg-[url('/img/line-bg.png')] bg-cover bg-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ icon, value, label }) => (
          <div key={label} className="flex flex-col items-center justify-center">
            {icon}
            <span className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              <CountUp
                start={0}
                end={value}
                duration={3}
                suffix="+"
                useEasing={false}
                separator=","
              />
            </span>
            <span className="block font-mono text-sm text-gray-300 mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Overview;
