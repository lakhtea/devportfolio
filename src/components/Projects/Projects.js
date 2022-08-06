import styles from "./Projects.module.css";
import Bootube from "../../assets/bootube.gif";
import Infit from "../../assets/in-fit.gif";
import AV from "../../assets/audio-visualizer.gif";
import OpenInNew from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

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
    footer,
    footerContent,
    disclaimer,
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
        "SASS",
        "Heroku",
      ],
      link: "https://bootube.herokuapp.com/#/",
      github: "https://github.com/lakhtea/bootube",
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
        "CSS3",
        "Heroku",
      ],
      link: "http://in-fit.herokuapp.com/#/",
      github: "https://github.com/shanto20-dev/InFit",
    },
    {
      imgSrc: AV,
      title: "Audio Visualizer",
      description:
        "A fun project built to test my ability to create something using vanilla JavaScript, HTML, and CSS. Using built in JavaScript features, this app allows you to upload a song of your choice, and watch a beautiful, interactive, visualizer based on the song's audio data.",
      disclaimer:
        "*Lots of flashing lights and colors **Only built for desktop",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Web Audio API",
        "HTML5 Canvas",
      ],
      link: "https://lakhtea.github.io/audio-visualizer/",
      github: "https://github.com/lakhtea/audio-visualizer",
    },
  ];

  return (
    <div id="Projects" className={container}>
      <h1>Projects</h1>
      <ul className={projectList}>
        {projects.map((item) => (
          <li id={item.title} className={project} key={item.title}>
            <img className={img} src={item.imgSrc} alt={item.title} />
            <h2 className={title}>{item.title}</h2>
            {item.disclaimer && (
              <div className={disclaimer}>Disclaimer: {item.disclaimer}</div>
            )}
            <p className={description}>{item.description}</p>
            <div className={technologies}>
              {item.technologies.map((technology) => (
                <div className={tab}>{technology}</div>
              ))}
            </div>
            <div className={footer}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                <span className={footerContent}>
                  Live site <OpenInNew />
                </span>
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                <span className={footerContent}>
                  GitHub Repo <GitHubIcon />
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
