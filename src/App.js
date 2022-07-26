import styles from "./App.module.css";
import Nav from "./components/nav/Nav";
import Content from "./components/content/Content";

function App() {
  const { container } = styles;

  return (
    <div className={container}>
      <Nav></Nav>
      <Content></Content>
    </div>
  );
}

export default App;
