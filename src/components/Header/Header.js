import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const { container } = styles;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  const update = () => {
    setIsMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener("resize", update);
  });
  return (
    <div className={container}>
      <Logo />
      {isMobile && <MenuIcon />}
      {!isMobile && <Nav />}
    </div>
  );
};

export default Header;
