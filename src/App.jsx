import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { GrProjects } from "react-icons/gr";

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <Skills />
      <Projects />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
