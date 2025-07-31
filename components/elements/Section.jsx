const Section = ({ children, className = "", as: Component = "section", animated = true, ...props }) => (
  <Component
    className={
      "w-full rounded-lg bg-[#272730] py-10 px-4 md:py-16 md:px-10 " +
      (animated ? "borderbox-animated " : "") +
      className
    }
    {...props}>
    {children}
  </Component>
);

export default Section;
