import styles from "./Content.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Content = ({ page }) => {
  const { container } = styles;
  const components = [<About />, <Projects />, <Skills />];

  return (
    <div className={`${container} content`}>
      {components.map((component) => component)}
    </div>
  );
};

export default Content;
