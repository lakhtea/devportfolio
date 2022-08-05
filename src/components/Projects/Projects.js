import styles from "./Projects.module.css";
import Bootube from "../../assets/bootube.gif";
import Infit from "../../assets/in-fit.gif";
import AV from "../../assets/audio-visualizer.gif";

const Projects = () => {
  const {
    container,
    projectList,
    project,
    title,
    img,
    link,
    description,
    technologies,
    tab,
  } = styles;
  const projects = [
    {
      imgSrc: Bootube,
      title: "Bootube",
      description:
        "Built to be a Youtube clone, Bootube allows for video streaming, uploading, commenting, and sharing.",
      technologies: [
        "React.js",
        "Ruby on Rails",
        "PostgreSQL",
        "AWS",
        "Webpack",
        "SCSS",
        "Heroku",
      ],
      mainColor: "#ff0000",
      backgroundColor: "#ffd0d1",
      link: "https://bootube.herokuapp.com/#/",
    },
    {
      imgSrc: Infit,
      title: "In-Fit",
      description:
        "A website that allows you to organize your own clothes online, allowing showcasing of outfits. This app was built to allow people to find outfit inspiration and for people to share their favorite outfits.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Create React App",
        "CSS3",
        "Heroku",
      ],
      mainColor: "#ff684e",
      backgroundColor: "#ffe1dd",
      link: "http://in-fit.herokuapp.com/#/",
    },
    {
      imgSrc: AV,
      title: "Audio Visualizer",
      description:
        "A fun project built to test my ability to create something using vanilla JavaScript, HTML, and CSS. Using built in JavaScript features, this app allows you to upload a song of your choice, and watch a beautiful, interactive, visualizer based on the song's audio data.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Web Audio API",
        "HTML5 Canvas",
      ],
      mainColor: "#752B90",
      backgroundColor: "#e7dceb",
      link: "https://lakhtea.github.io/audio-visualizer/",
    },
  ];

  return (
    <div id="Projects" className={container}>
      <h1>Projects</h1>
      <ul className={projectList}>
        {projects.map((item) => (
          <li id={item.title} className={project} key={item.title}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              <img className={img} src={item.imgSrc} alt={item.title} />
              <h2 className={title}>{item.title}</h2>
            </a>
            <p className={description}>{item.description}</p>
            <div className={technologies}>
              {item.technologies.map((technology) => (
                <div className={tab}>{technology}</div>
              ))}
            </div>
          </li>
        ))}
        <li className={project}>
          <h2 className={title}>More to come!</h2>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
