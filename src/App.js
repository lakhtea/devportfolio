import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { useState, createContext } from "react";

export const MenuContext = createContext();

function App() {
  const { container } = styles;

  const [page, setPage] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={container}>
      <MenuContext.Provider value={{ menuOpen, setMenuOpen, page, setPage }}>
        <Header setPage={setPage} />
        <Content page={page} />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
