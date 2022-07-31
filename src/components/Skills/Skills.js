import styles from "./Skills.module.css";

const Skills = () => {
  const { technologies, grid, item } = styles;

  const frontend = ["React", "HTML", "CSS"];
  const backend = ["Node.js", "Ruby", "Python"];
  const other = ["AWS", "Heroku", "Webpack"];

  return (
    <div id="Skills">
      Technologies:
      <div className={technologies}>
        <div>
          <span>Frontend</span>
          <div className={grid}>
            {frontend.map((technology) => (
              <div className={item}>{technology}</div>
            ))}
          </div>
        </div>
        <div>
          <span>Backend</span>
          <div className={grid}>
            {backend.map((technology) => (
              <div className={item}>{technology}</div>
            ))}
          </div>
        </div>
        <div>
          <span>Other technologies</span>
          <div className={grid}>
            {other.map((technology) => (
              <div className={item}>{technology}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
