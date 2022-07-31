import { useContext } from "react";
import { MenuContext } from "../../App";
import styles from "./Menu.module.css";

const Menu = () => {
  const { container, open, list, item, button } = styles;
  const { menuOpen, setMenuOpen, setPage } = useContext(MenuContext);

  const navLinks = [
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  const handleClick = (name) => {
    setMenuOpen(!menuOpen);
    setPage(name);
    document.querySelector("body").classList.toggle("blur");
    document.querySelector("html").classList.toggle("scrollbar-hidden");
  };

  return (
    <div className={`${container} ${menuOpen && open} menu`}>
      <ul className={list}>
        {navLinks.map(({ name }) => (
          <li key={name} className={item}>
            <button onClick={() => handleClick(name)} className={button}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
