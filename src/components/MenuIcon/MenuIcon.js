import styles from "./MenuIcon.module.css";
import { MenuContext } from "../../App";
import { useContext } from "react";

const MenuIcon = () => {
  const { container, bar, active } = styles;
  const { menuOpen, handleMenuToggle } = useContext(MenuContext);

  return (
    <button
      onClick={handleMenuToggle}
      className={`${container} ${menuOpen && active} menu-el`}
    >
      <div className={bar}></div>
      <div className={bar}></div>
      <div className={bar}></div>
    </button>
  );
};

export default MenuIcon;
