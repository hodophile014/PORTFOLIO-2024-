import React from 'react';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
 // Example sticker path

const skillsData = [
  {
    name: 'Java',
    icon: <FaJava className="text-[#007396]" />,
    level: '90%',
    sticker: "sticker1.png", // Add sticker for each skill
  },
  {
    name: 'Python',
    icon: <FaPython className="text-[#3776AB]" />,
    level: '85%',
    sticker: "sticker2.png",
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
    level: '88%',
    sticker: "sticker1.png",
  },
  {
    name: 'React.js',
    icon: <FaReact className="text-[#61DAFB]" />,
    level: '80%',
    sticker: "sticker2.png",
  },
  {
    name: 'HTML',
    icon: <FaHtml5 className="text-[#E34F26]" />,
    level: '95%',
    sticker: "sticker2.png",
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    level: '90%',
    sticker: "sticker2.png",
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-[#38B2AC]" />,
    level: '85%',
    sticker: "sticker1.png",
  },
  {
    name: 'SQL (MySQL)',
    icon: <FaDatabase className="text-[#4479A1]" />,
    level: '75%',
    sticker: "sticker2.png",
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-[#47A248]" />,
    level: '70%',
    sticker: "sticker1.png",
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-[#F05032]" />,
    level: '70%',
    sticker: "sticker2.png",
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <div className="flex justify-center items-center">
               
                <div className="text-5xl">{skill.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div
                  className="bg-yellow-500 h-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="absolute bottom-2 right-2 text-sm text-gray-400">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
