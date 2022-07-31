import styles from "./Nav.module.css";

const Nav = ({ setPage }) => {
  const { container, list, button } = styles;
  const navLinks = [
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  return (
    <div className={container}>
      <ul className={list}>
        {navLinks.map(({ name }) => (
          <li>
            <button onClick={() => setPage(name)} className={button}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
