import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contacts";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contacts/>}/>

      </Routes>
      <Navbar />
      
      
    </div>
   </BrowserRouter>
  );
}

export default App;
