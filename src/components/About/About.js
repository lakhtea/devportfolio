import styles from "./About.module.css";
import Skills from "../Skills/Skills";
import Avatar from "../../assets/avatar.jpeg";

const About = () => {
  const {
    container,
    start,
    headline,
    skills,
    skillsHeader,
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
        building games and animations using variables and loops. Today I use
        cutting edge technologies and my expertise on full-stack development to
        create visually interesting and effecient web components and
        applications.
      </p>
      <div className={skills}>
        <p className={skillsHeader}>
          <span className={headline}>Some of the technologies</span> I've gained
          expertise in over the course of my career:
        </p>
        <Skills />
      </div>
      <p className={start}>
        <span className={headline}>
          Outside of my work as a software engineer,
        </span>{" "}
        I'm into weightlifting, binging TV shows and movies, and spending the
        day exploring the outdoors with friends.
      </p>
    </div>
  );
};

export default About;
