import "./Footer.scss";
import git from "../assets/images/ant-design_github-filled.png";
import linked from "../assets/images/cib_linkedin-in.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p className="footer__p">katarzyna.kozlowska@nology.io</p>
      <div className="footer__container">
      <div className="footer__button">
        <a className="footer__link" href="https://github.com/KatKozlowska" target="blank">
          <img src={git} />
        </a>
      </div>
      <div className="footer__button">
        <a className="footer__link"
          href="https://www.linkedin.com/in/katarzyna-kozlowska-9a66a2147/"
          target="blank"
        >
          <img src={linked} />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
