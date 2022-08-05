import { useContext } from "react";
import { MenuContext } from "../../App";
import styles from "./Menu.module.css";

const Menu = () => {
  const { container, open, list, item, link, innerItems, innerLink } = styles;
  const { menuOpen, handleMenuToggle } = useContext(MenuContext);

  const navLinks = [
    { name: "About" },
    { name: "Projects", innerList: ["Bootube", "In-Fit", "Audio Visualizer"] },
  ];

  return (
    <div className={`${container} ${menuOpen && open} menu menu-el`}>
      <ul className={`${list} menu-el`}>
        {navLinks.map(({ name, innerList }) => (
          <li key={name} className={`${item} menu-el`}>
            <a
              href={`#${name}`}
              onClick={handleMenuToggle}
              className={`${link} menu-el`}
              disabled={!menuOpen}
            >
              {name}
            </a>
            <ul className={list}>
              {innerList &&
                innerList.map((item) => (
                  <li key={name} className={`${item} ${innerItems} menu-el`}>
                    <a
                      href={`#${item}`}
                      onClick={handleMenuToggle}
                      className={`${link} ${innerLink} menu-el`}
                      disabled={!menuOpen}
                    >
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
