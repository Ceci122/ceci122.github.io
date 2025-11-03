import React from 'react';

const techIcons = [
  // Frontend
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg", alt: "React Router" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg", alt: "Babel" },

  // Backend
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  
    // Tools
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "npm" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg", alt: "Yarn" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", alt: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", alt: "Jest" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg", alt: "YAML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  { src: "https://files.svgcdn.io/logos/daisyui.svg", alt: "DaisyUI" },
  { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt: "Postman" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub Pages" },
];

const Technologies = () => {
  return (
    <section id="tech-stack" className="py-12 bg-gray-100">
        <div className="flex w-full flex-col">
        <div className="divider divider-center text-2xl font-bold text-secondary">Technologies I Use</div>
        </div>
        <div className="my-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 sm:gap-8 justify-items-center">
        {techIcons.map((icon) => (
          <div
            key={icon.alt}
            className="tooltip tooltip-primary"
            data-tip={icon.alt}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;