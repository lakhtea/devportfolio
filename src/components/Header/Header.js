import { useEffect, useState, useContext } from "react";
import Logo from "../Logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import Nav from "../Nav/Nav";
import { useScrollDirection } from "use-scroll-direction";
import styles from "./Header.module.css";
import { MenuContext } from "../../App";

const Header = () => {
  const { container, down, up, extraPadding } = styles;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  const [isTop, setIsTop] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(false);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const { menuOpen } = useContext(MenuContext);

  const update = () => {
    setIsMobile(window.innerWidth < 650);
  };

  const fixUnsetHeader = () => {
    if (window.scrollY > 80) {
      setIsTop(false);
    }

    if (window.scrollY !== 0 && isScrollingUp) {
      setScrollingUp(true);
    }

    if (isScrollingDown) {
      setScrollingUp(false);
    }

    if (window.scrollY <= 0) {
      setScrollingUp(true);
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", update);
    window.addEventListener("scroll", fixUnsetHeader);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", fixUnsetHeader);
    };
  });

  return (
    <div
      className={`${container} ${!scrollingUp && !isTop && down} ${
        scrollingUp && up
      } ${!isMobile && menuOpen && extraPadding}`}
    >
      <Logo />
      {isMobile && <MenuIcon />}
      {!isMobile && <Nav />}
    </div>
  );
};

export default Header;
