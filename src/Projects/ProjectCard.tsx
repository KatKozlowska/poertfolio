import view from "../assets/images/clarity_eye-line.png";
import code from "../assets/images/bi_code-slash.png"


import "./ProjectCard.scss";
type ProjectCardProps = {
  title: string;
  description: string;
  repo: string;
  live: string;
  img: string;
};

const ProjectCard = ({
  title,
  description,
  repo,
  live,
  img,
}: ProjectCardProps) => {
  return (
    <>
      <div className="project">
        <h2 className="project__heading">{title}</h2>
        <div className="img-container">
          <img className="card-img" src={img} alt={title} />
        </div>
        <p className="project__description">{description}</p>
        <div className="buttons">
          <a href={live} target="_blank">
            <img src={view}  className="buttons buttons__one"/>
          </a>
          <a href={repo} target="_blank">
          <img src={code} className="buttons buttons__two "/>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
