import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./blog.module.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line func-names
    const fetchDoctor = async function () {
      await fetch("http://localhost:5000/blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.posts.length !== 0) {
            setPosts(data.data.posts);
          }
        });
    };
    fetchDoctor();
  }, []);
  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.firstPostContainer}>
          <div className={styles.firstPostInfo}>
            <div>
              <h2 className={styles.titleFirstPost}>{posts[0].title}</h2>
            </div>
            <div className={styles.firstPostInfo}>
              <span className={styles.date}>{posts[0].createdAt}</span>
              <p className={styles.aticleIntro}>{posts[0].content}</p>
            </div>
            <button type="button" className={styles.moreBtn}>
              More &rarr;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
