import "./Projects.scss";
import { Projects } from "../types";
import ProjectCard from "./ProjectCard";

type ProjectsSectionProps = {
  projects: Projects[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    < div id="projects">
      <h1 className="heading">PROJECTS</h1>

      <section>
        {projects.map((project) => (
          <div className={project.title}>
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              repo={project.repo}
              live={project.live}
              img={project.img}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsSection;
