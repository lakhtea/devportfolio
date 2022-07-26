import styles from "./Content.module.css";
import Projects from "../projects/Projects";

const Content = () => {
  const { container } = styles;

  return (
    <div className={container}>
      <Projects></Projects>
    </div>
  );
};

export default Content;
