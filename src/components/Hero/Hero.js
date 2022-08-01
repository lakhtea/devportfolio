import styles from "./Hero.module.css";

const Hero = () => {
  const { container, message } = styles;

  return (
    <div id="Hero" className={`${container} hero`}>
      <div className={message}>Hero</div>
    </div>
  );
};

export default Hero;
