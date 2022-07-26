import styles from "./Nav.module.css";

const Nav = () => {
  const { container, list, button } = styles;
  const navLinks = [
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  return (
    <div className={container}>
      <ul className={list}>
        {navLinks.map(({ name }) => (
          <li>
            <button className={button}>{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
