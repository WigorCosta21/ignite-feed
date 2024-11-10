import { Header } from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
};

export default App;