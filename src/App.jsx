import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", background: "#f3f6fb", color: "#111827" }}>
      <Navbar />
      <Intro />
      <Skills />
      <AboutUs />
      <Experience />
      <Project />
      <ContactMe />
    </Box>
  );
}

export default App;
