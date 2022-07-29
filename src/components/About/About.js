import styles from "./About.module.css";

const About = () => {
  const { about } = styles;
  return (
    <div>
      <p className={about}>
        My interest in development with building games and animations using
        variables and loops. I realized then that I enjoy creating with code.
        Today I'm happy to say that interest has made me a Fullstack Software
        Developer, with a focus on building reliable, accessible, and great
        looking websites.
      </p>
    </div>
  );
};

export default About;
