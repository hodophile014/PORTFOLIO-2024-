import React from "react";
//import heroImage from "../assets/hero-image.png"; // Replace with your image file path

const Main = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-screen bg-gradient-to-b from-blue-900 to-black text-white px-8 lg:px-32">
      {/* Left Section: Text */}
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Hello, I'm Himanshi Gupta</h1>
        <p className="mt-4 text-xl">Full Stack Developer | React.js | Java</p>
        <a
          href="https://drive.google.com/file/d/177mOUz8eYt8WtmG6E5ffq3huXeqfX-GW/view?usp=sharing"
          target="_blank"
           rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
        >
          Resume
        </a>
      </div>

      {/* Right Section: Image */}
      <div className="mt-8 lg:mt-0">
        <img
          src="https://i.pinimg.com/736x/c4/c6/96/c4c696d43555c08f806375759e1b7528.jpg"
          alt="Himanshi Gupta"
          className="w-60 lg:w-72 rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Main;
