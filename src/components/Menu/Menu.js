import { useContext } from "react";
import { MenuContext } from "../../App";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./Menu.module.css";

const Menu = () => {
  const {
    container,
    open,
    list,
    item,
    link,
    innerItems,
    innerLink,
    contact,
    icons,
    icon,
  } = styles;
  const { menuOpen, handleMenuToggle } = useContext(MenuContext);

  const navLinks = [
    { name: "About" },
    { name: "Projects", innerList: ["Bootube", "In-Fit", "Audio Visualizer"] },
  ];

  return (
    <div className={`${container} ${menuOpen && open} menu menu-el`}>
      <ul className={`${list} menu-el`}>
        {navLinks.map(({ name, innerList }) => (
          <li key={name} className={`${item} menu-el`}>
            <a
              href={`#${name}`}
              onClick={handleMenuToggle}
              className={`${link} menu-el`}
              disabled={!menuOpen}
            >
              {name}
            </a>
            <ul className={list}>
              {innerList &&
                innerList.map((item) => (
                  <li key={name} className={`${item} ${innerItems} menu-el`}>
                    <a
                      href={`#${item}`}
                      onClick={handleMenuToggle}
                      className={`${link} ${innerLink} menu-el`}
                      disabled={!menuOpen}
                    >
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
        <li className={`${item} ${contact} menu-el`}>
          <span>Contact me!</span>
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

export default Menu;
