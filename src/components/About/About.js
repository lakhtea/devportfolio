import styles from "./About.module.css";

const About = () => {
  const { container, about } = styles;
  return (
    <div className={container}>
      <p className={about}>
        My interest in development began with building games and animations
        using variables and loops. I realized then that I enjoy creating with
        code. Today I'm happy to say that interest has turned me into a
        Fullstack Software Developer, with a focus on building reliable,
        accessible, and great looking websites.
      </p>
    </div>
  );
};

export default About;
