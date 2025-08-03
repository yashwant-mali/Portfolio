import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Experience from "./components/Experience.jsx"; // Assuming this is the correct import path
import Project from "./components/Project.jsx";
import ContactMe from "./components/ContactMe.jsx"; // Assuming this is the correct import path

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <AboutUs />
      <Experience />
      <Project />
      <ContactMe />
    </>
  );
}

export default App;
