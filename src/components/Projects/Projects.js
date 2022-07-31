import styles from "./Projects.module.css";
import Infit from "../../assets/in-fit.gif";
import AV from "../../assets/audio-visualizer.gif";

import Pic from "../../assets/pic.png";

const Projects = () => {
  const { container, card, img, heading, desc, hr, subheading, tabs, tab } =
    styles;
  const projects = [
    {
      imgSrc: Pic,
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
    },
  ];

  return (
    <ul id="Projects" className={container}>
      {projects.map(
        ({ imgSrc, title, description, technologies, mainColor }) => (
          <li style={{ borderColor: mainColor }} className={card}>
            <img className={img} src={imgSrc} alt={title} />
            <span className={heading}>{title}</span>
            <p className={desc}>{description}</p>
            <hr className={hr} />
            <p className={subheading}>Technologies used:</p>
            <div className={tabs}>
              {technologies?.map((technology) => (
                <div style={{ backgroundColor: mainColor }} className={tab}>
                  {technology}
                </div>
              ))}
            </div>
          </li>
        )
      )}
      <li className={card}>More to come!</li>
    </ul>
  );
};

export default Projects;
