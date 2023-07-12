import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Project from "./Pages/Project/Project.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import "./Styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
