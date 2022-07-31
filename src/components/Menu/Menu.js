import { useContext } from "react";
import { MenuContext } from "../../App";
import styles from "./Menu.module.css";
import Nav from "../Nav/Nav";

const Menu = () => {
  const { container, open } = styles;
  const { menuOpen } = useContext(MenuContext);

  return (
    <div className={`${container} ${menuOpen && open}`}>
      <Nav />
    </div>
  );
};

export default Menu;
