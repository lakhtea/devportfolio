import styles from "./Nav.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Nav = () => {
  const { container, list, icon, contact, link, listItem, icons } = styles;

  const navLinks = [{ name: "About" }, { name: "Projects" }];

  return (
    <div className={container}>
      <ul className={list}>
        {navLinks.map(({ name }) => (
          <li className={listItem} key={name}>
            <a href={`#${name}`}>{name}</a>
          </li>
        ))}
        <li className={`${listItem} ${contact} menu-el`}>
          <div className={icons}>
            <a
              className={link}
              href="https://github.com/lakhtea"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={icon} />
              <span>GitHub</span>
            </a>
            <a
              className={link}
              href="https://www.linkedin.com/in/lakhte-agha-1909b11b2/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={icon} />
              <span>LinkedIn</span>
            </a>
            <a
              className={link}
              href="mailto: lakhteagha@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon className={icon} />
              <span>Email</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
