import ProjectsCarousel from "../elements/ProjectsCarousel";
import Section from "../elements/Section";

const Projects = () => {
  return (
    <Section
      as='div'
      animated={false}
      className="overflow-hidden border border-zinc-600 bg-[url('/img/line-bg.png')] bg-cover bg-center">
      <h3 className='section-mini-title mb-2'>Projects</h3>
      <h2 className='section-title max-w-2xl'>
        My Recent <span>Projects</span>
      </h2>

      <ProjectsCarousel />
    </Section>
  );
};

export default Projects;
