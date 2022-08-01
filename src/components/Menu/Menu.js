import { useContext } from "react";
import { MenuContext } from "../../App";
import styles from "./Menu.module.css";

const Menu = () => {
  const { container, open, list, item, link } = styles;
  const { menuOpen, handleMenuToggle } = useContext(MenuContext);

  const navLinks = [
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  return (
    <div className={`${container} ${menuOpen && open} menu menu-el`}>
      <ul className={`${list} menu-el`}>
        {navLinks.map(({ name }) => (
          <li key={name} className={`${item} menu-el`}>
            <a
              href={`#${name}`}
              onClick={handleMenuToggle}
              className={`${link} menu-el`}
              disabled={!menuOpen}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
