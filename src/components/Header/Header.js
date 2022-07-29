import Logo from "../Logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import styles from "./Header.module.css";

const Header = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <Logo />
      <MenuIcon />
    </div>
  );
};

export default Header;
