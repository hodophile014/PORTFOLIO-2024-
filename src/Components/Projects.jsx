import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const projectsData = [
  {
    id: 1,
    title: 'AnimeDex',
    description: 'A React-based landing page showcasing anime content.',
    techStack: ['React.js', 'Tailwind CSS'],
    image: 'animedex.png', // Replace with actual image
    link: 'https://github.com/hodophile014/ANIMEDEX-A-LANDING-PAGE-USING-REACTJS-',
  },
  {
    id: 2,
    title: 'Portfolio Game Themed',
    description: 'A game themed portfolio built using reactjs and its hooks',
    techStack: ['ReactJS', 'TailwindCSS', 'React Hooks'],
    image: 'gamethemed.png',
    link: 'https://github.com/hodophile014/portfolio-game-themed',
  },
  {
    id: 3,
    title: 'Shopping',
    description: 'An ecommerce website built using JAVA, JSP AND SERVLET',
    techStack: ['JAVA', 'JSP', 'SERVLETS','SQL'],
    image: 'shoppinhub.png',
    link: 'https://github.com/hodophile014/ECOMMERCE-PLATFORM-USING-JSP-SQL-AND-SERVLETS',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'A simple portfolio that you are seeing right now',
    techStack: ['ReactJS', 'TAILWINCSS'],
    image: 'portfolio.png',
    link: '',
  },
  {
    id: 5,
    title: 'Customer-survey',
    description: 'A customer Experience survey project(Based on an assignment)',
    techStack: ['ReactJS', 'TAILWINCSS',"React hooks"],
    image: 'survey.png',
    link: 'https://github.com/hodophile014/Customer-survey-using-REACTJS-TAILWINDCSS',
  },
  {
    id: 6,
    title: 'Demon slayer',
    description: 'Website developed using reactjs and reactQuery',
    techStack: ['ReactJS', 'TAILWINCSS',"React query"],
    image: 'demonslayer.png',
    link: '',
  },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 py-12 mt-10 lg:h-screen sm:h-full">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-shadow-md">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-6 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 transform group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} closeDetails={closeDetails} />}
    </section>
  );
};

export default Projects;
