import "./Skills.scss";
import Git from "../../assets/skills-images/Skill=Git.png";
import Bem from "../../assets/skills-images/Skill=BEM.png";
import Scss from "../../assets/skills-images/Skill=SCSS.png";
import Html from "../../assets/skills-images/Skill=HTML5.png";
import Java from "../../assets/skills-images/Skill=Java.png";
import JavaScript from "../../assets/skills-images/Skill=JavaScript.png";
import React from "../../assets/skills-images/Skill=React.png";
import Css from "../../assets/skills-images/Skill=CSS3.png";
import Spring from "../../assets/skills-images/Skill=SpringBoot.png";

const Skills = () => {
  return (
    <section className="skills">
        <div className="skills__text">
      <h1 className="skills__heading">SKILLS</h1>
      <p className="skills__description">Throughout my learning I have picked up the skills listed below. </p>
      </div>
      <div className="skills__container">
        <img className="skills__icon" src={Git} />
        <img className="skills__icon" src={Bem} />
        <img className="skills__icon" src={Scss} />
        <img className="skills__icon" src={Html} />
        <img className="skills__icon" src={Java} />
        <img className="skills__icon" src={JavaScript} />
        <img className="skills__icon" src={React} />
        <img className="skills__icon" src={Css} />
        <img className="skills__icon" src={Spring} />
      </div>
    </section>
  );
};

export default Skills;
