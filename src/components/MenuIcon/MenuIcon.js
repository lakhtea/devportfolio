import styles from "./MenuIcon.module.css";
import { MenuContext } from "../../App";
import { useContext } from "react";

const MenuIcon = () => {
  const { container, bar, active } = styles;
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    document.querySelector("body").classList.toggle("blur");
  };

  return (
    <button
      onClick={handleClick}
      className={`${container} ${menuOpen && active}`}
    >
      <div className={bar}></div>
      <div className={bar}></div>
      <div className={bar}></div>
    </button>
  );
};

export default MenuIcon;
