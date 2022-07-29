import styles from "./Content.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { MenuContext } from "../../App";
import { useContext } from "react";

const Content = ({ page }) => {
  const { container, covered } = styles;
  const { menuOpen } = useContext(MenuContext);
  const components = {
    About: <About />,
    Projects: <Projects />,
    Skills: <Skills />,
  };

  return (
    <div className={`${container} content`}>
      {components[page]}
      {menuOpen && <div className={covered}></div>}
    </div>
  );
};

export default Content;
