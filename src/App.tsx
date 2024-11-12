import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

import { Post as postData } from "./data/Posts";

import styles from "./App.module.css";
import "./global.css";

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
};

export default App;
