import styles from "./About.module.css";
import Skills from "../Skills/Skills";
import Avatar from "../../assets/avatar.jpeg";
import Resume from "../../assets/LakhteAghaResume.pdf";

const About = () => {
  const {
    container,
    start,
    headline,
    skills,
    skillsHeader,
    resume,
    avatar,
    avatarContainer,
    avatarShadow,
  } = styles;
  return (
    <div id="About" className={container}>
      <h1>About</h1>
      <div className={avatarContainer}>
        <img className={avatar} src={Avatar} alt="Lakhte Agha" />
        <div className={avatarShadow}></div>
      </div>
      <p className={start}>
        <span className={headline}>My interest in development</span> began with
        building games and animations using variables and loops. I realized then
        that I enjoy creating with code. Today I'm happy to say that interest
        has turned me into a Fullstack Software Developer, with a focus on
        building reliable, accessible, and great looking websites.
      </p>
      <div className={skills}>
        <p className={skillsHeader}>
          <span className={headline}>Some of the technologies</span> I've gained
          expertise in over the course of my career:
        </p>
        <Skills />
      </div>
      <a href={Resume} className={resume} download>
        Download my resume here!
      </a>
    </div>
  );
};

export default About;
