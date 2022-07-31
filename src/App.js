import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import { useState, createContext } from "react";

export const MenuContext = createContext();

function App() {
  const { container } = styles;

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = (close) => {
    close === true ? setMenuOpen(false) : setMenuOpen(!menuOpen);
    document.querySelector("body").classList.toggle("blur");
    document.querySelector("html").classList.toggle("scrollbar-hidden");
  };

  const handleClickOutside = (e) => {
    if (!e.target.classList.contains("menu-el") && menuOpen)
      handleMenuToggle(null, true);
  };

  return (
    <div onClick={handleClickOutside} className={container}>
      <MenuContext.Provider value={{ menuOpen, handleMenuToggle }}>
        <Header />
        <Hero />
        <Content />
        <Menu />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
