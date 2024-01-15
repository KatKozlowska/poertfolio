import Nav from "./Nav/Nav";
import About from "./About/About";
import ProjectsSection from "./Projects/Projects";
import { Projects } from "./data";
import Skills from "./Projects/Skills/Skills";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <About/>
      <Skills/>
      <ProjectsSection projects={Projects} />
      <Footer/>
    </div>
  );
};

export default App;
