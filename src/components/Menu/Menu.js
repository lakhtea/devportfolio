import { useContext } from "react";
import { MenuContext } from "../../App";
import styles from "./Menu.module.css";

const Menu = () => {
  const { container } = styles;
  const { menuOpen } = useContext(MenuContext);

  return menuOpen && <div className={container}>Menu</div>;
};

export default Menu;
