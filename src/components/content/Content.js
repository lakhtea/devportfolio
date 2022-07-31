import styles from "./Content.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Content = ({ page }) => {
  const { container } = styles;
  const components = {
    About: <About />,
    Projects: <Projects />,
    Skills: <Skills />,
  };

  return <div className={`${container} content`}>{components[page]}</div>;
};

export default Content;
