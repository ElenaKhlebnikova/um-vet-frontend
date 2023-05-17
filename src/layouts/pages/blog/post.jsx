/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./post.module.css";

function Post() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchFunction = async function () {
      await fetch(`http://localhost:5000/blog?postId=${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data !== undefined) {
            setPost(data.data.posts[0]);
          }
        });
    };

    fetchFunction();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.postContainer}>
        <div
          className={styles.generalInfoContainer}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${post.img})`,
          }}
        >
          <div className={styles.date}>
            <span>{post.createdAt}</span>
          </div>
          <div className={styles.title}>
            <h3>{post.title}</h3>
          </div>
        </div>
        <div className={styles.contentContainer}>
          {post.content &&
            post.content.split("\n").map((line) => (
              <span>
                {line} <br />{" "}
              </span>
            ))}
          <Link to="/blog">
            <button className={styles.backBtn} type="button">
              &larr; Go back{" "}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Post;
