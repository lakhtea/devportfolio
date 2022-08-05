import styles from "./Skills.module.css";

const Skills = () => {
  const { technologies, column, columnHeader, item } = styles;

  const skills = [
    { type: "Frontend", technologies: ["React.js", "TypeScript", "Ember.js"] },
    { type: "Backend", technologies: ["Node.js", "Ruby", "Python"] },
    { type: "Database", technologies: ["SQL", "NoSQL", "GraphQL"] },
    { type: "Other", technologies: ["AWS", "Redux", "Git"] },
  ];

  return (
    <div className={technologies} id="Skills">
      {skills.map(({ type, technologies }, i) => (
        <div key={i} className={column}>
          <div className={columnHeader}>{type}</div>
          {technologies.map((technology, i) => (
            <div key={i} className={item}>
              {technology}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
