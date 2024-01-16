import "./about.scss";
import me from "../assets/images/author.jpg";

const About = () => {
  return (
    <section className="about" id="about">
    <h1 className="about__heading">ABOUT ME</h1>
   <div className="about__div">
      <p className="about__p">
        Hi! My name is Katarzyna (Kat) and am a hardworking, proactive, and
        creative individual with experience in people management. Previously I
        was a Designer and a Showroom manager which has helped me develop strong
        project management, leadership, and teamwork skills. I have always
        loved creating, which made me peruse a degree in architecture; which allowed me to sharpen up my
        critical thinking, public speaking and attention to detail. After encountering
        software development through my peers, I could not help but think of
        the endless possibilities when you are not limited to physical
        materials. Under the guidance of _nology I am keen to bring a creative
        spin into the world of tech!
      </p>
      <div className="about__img">
      <img className="me" src={me} alt="author" />
      </div>
      </div>
    </section>
  );
};

export default About;
