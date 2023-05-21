/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import styles from './blog.module.css';
import useFetch from '../../../hooks/useFetch';

function Blog() {
    const fetchedPosts = useFetch('blog');
    const posts = fetchedPosts.posts;

    return (
        <div>
            <Header />
            {posts !== undefined && (
                <div className={styles.mainContainer}>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${posts[0].img})`,
                        }}
                        className={styles.firstPostContainer}
                    >
                        <div>
                            <h2 className={styles.titleFirstPost}>
                                {posts[0].title}
                            </h2>
                        </div>
                        <div className={styles.firstPostInfo}>
                            <span className={styles.date}>
                                {posts[0].createdAt}
                            </span>
                            <div className={styles.aticleIntro}>
                                <p>{posts[0].description}</p>
                                <Link to={`/blog/${posts[0]._id}`}>
                                    <button
                                        type="button"
                                        className={styles.moreBtn}
                                    >
                                        More &rarr;
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.otherPosts}>
                        {posts !== undefined &&
                            posts
                                .filter((post) => posts.indexOf(post) !== 0)
                                .map((post) => (
                                    <div className={styles.postContainer}>
                                        <img
                                            className={styles.img}
                                            src={post.img}
                                            alt={post.title}
                                        />
                                        <h3 className={styles.postTitle}>
                                            {post.title}
                                        </h3>
                                        <p>{post.description}</p>
                                        <Link to={`/blog/${post._id}`}>
                                            <button
                                                type="button"
                                                className={styles.moreBtn}
                                            >
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
