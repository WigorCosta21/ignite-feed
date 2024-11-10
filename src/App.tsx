import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Posts</main>
      </div>
    </>
  );
};

export default App;
