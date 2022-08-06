import styles from "./Content.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Content = ({ page }) => {
  const { container } = styles;
  const components = [<About />, <Projects />];

  return (
    <div className={`${container} content`}>
      {components.map((component) => component)}
    </div>
  );
};

export default Content;
