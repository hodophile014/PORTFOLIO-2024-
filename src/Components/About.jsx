import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 flex justify-center items-center h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="me.jpg" // Replace with your image URL
            alt="Your Portrait"
            className="rounded-full shadow-lg w-64 h-64 mx-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 md:pl-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold text-indigo-600">Himanshi Gupta</span>, a passionate developer skilled in building modern web
            applications. With expertise in JavaScript, React.js, Tailwind CSS,
            and backend technologies like Spring Boot, I craft user-friendly
            and efficient solutions.  
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            I enjoy learning new technologies and working on creative projects.
            My goal is to create impactful digital experiences that solve real-world
            problems. Feel free to explore my portfolio to see what I’ve been working on!
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
