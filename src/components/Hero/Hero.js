import styles from "./Hero.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const { container, name, sub, blurb, link, icons, icon } = styles;

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
      <div className={icons}>
        <a href="https://www.ltvco.com/" target="_blank" rel="noreferrer">
          <GitHubIcon className={icon} />
        </a>

        <LinkedInIcon className={icon} />
        <EmailIcon className={icon} />
      </div>
    </div>
  );
};

export default Hero;
