import styles from "./Hero.module.css";
import Resume from "../../assets/LakhteAghaResume.pdf";

const Hero = () => {
  const { container, name, sub, blurb, link, resume } = styles;

  return (
    <div id="Hero" className={`${container} hero`}>
      <div>
        <p className={name}>Lakhte Agha</p>
        <p className={sub}>Software Engineer</p>
      </div>

      <p className={blurb}>
        I am a software engineer specializing in creating seamless, efficient,
        and accessible applications. Currently a full stack engineer, building a
        variety of new features across multiple platforms at{" "}
        <a
          href="https://www.ltvco.com/"
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          The Lifetime Value Co.
        </a>
      </p>
      <a href={Resume} className={resume} download>
        Download my resume here!
      </a>
    </div>
  );
};

export default Hero;
