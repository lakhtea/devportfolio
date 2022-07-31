import styles from "./Nav.module.css";
import { MenuContext } from "../../App";
import { useContext } from "react";

const Nav = () => {
  const { container, list, button } = styles;
  const { menuOpen, setMenuOpen, setPage } = useContext(MenuContext);

  const navLinks = [
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  const handleClick = async (name) => {
    await setMenuOpen(!menuOpen);
    document.querySelector("body").classList.toggle("blur");
    await setPage(name);
  };

  return (
    <div className={container}>
      <ul className={list}>
        {navLinks.map(({ name }) => (
          <li key={name}>
            <button onClick={() => handleClick(name)} className={button}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
