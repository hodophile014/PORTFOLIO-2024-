import React from 'react';

const ProjectDetails = ({ project, closeDetails }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-xl p-8 w-11/12 max-w-3xl transition-all transform scale-105 hover:scale-110">
        <button
          onClick={closeDetails}
          className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:rotate-12"
        >
          Close
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded-lg mb-6 shadow-xl"
        />
        <h2 className="text-3xl font-extrabold text-white mb-4 text-shadow-lg">{project.title}</h2>
        <p className="text-gray-200 text-lg mb-4">{project.description}</p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">Tech Stack</h3>
          <ul className="flex flex-wrap gap-4">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-full text-md shadow-md hover:bg-gray-700 transition duration-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg shadow-lg transition duration-200 transform hover:scale-105"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
