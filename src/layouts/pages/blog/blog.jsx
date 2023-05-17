/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./blog.module.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [firstPost, setFirstPost] = useState({});

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
          setPosts(data.data.posts);
          setFirstPost(data.data.posts.shift());
        });
    };
    fetchDoctor();
  }, []);
  return (
    <div>
      <Header />
      {posts.length !== 0 && (
        <div className={styles.mainContainer}>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${firstPost.img})`,
            }}
            className={styles.firstPostContainer}
          >
            <div>
              <h2 className={styles.titleFirstPost}>{firstPost.title}</h2>
            </div>
            <div className={styles.firstPostInfo}>
              <span className={styles.date}>{firstPost.createdAt}</span>
              <div className={styles.aticleIntro}>
                <p>{firstPost.description}</p>
                <Link to={`/blog/${firstPost._id}`}>
                  <button type="button" className={styles.moreBtn}>
                    More &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.otherPosts}>
            {posts.map((post) => (
              <div className={styles.postContainer}>
                <img className={styles.img} src={post.img} alt={post.title} />
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p>{post.description}</p>
                <Link to={`/blog/${post._id}`}>
                  <button type="button" className={styles.moreBtn}>
                    More &rarr;
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Blog;
