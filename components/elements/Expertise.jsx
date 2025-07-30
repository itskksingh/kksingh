const techStacks = [
  { category: "Front-End", skills: "HTML, CSS, JavaScript, React, Angular" },
  { category: "Back-End", skills: "Node.js, Express, Python, Django" },
  { category: "Databases", skills: "MySQL, PostgreSQL, MongoDB" },
  { category: "Tools & Platforms", skills: "Git, Docker, AWS, Heroku" },
  { category: "Others", skills: "RESTful APIs, GraphQL" },
];

const Expertise = () => {
  return (
    <ul className='space-y-5 font-mono text-base text-[#8f8f92] list-disc '>
      {techStacks.map((item) => (
        <li key={item.category}>
          <span className='text-white font-bold mb-2 block md:inline'>{item.category}:</span>
          <span className='lg:ml-2'>{item.skills}</span>
        </li>
      ))}
    </ul>
  );
};

export default Expertise;
