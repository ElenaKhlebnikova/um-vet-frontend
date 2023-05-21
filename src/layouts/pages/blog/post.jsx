/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import styles from './post.module.css';

function Post() {
    const { postId } = useParams();

    const fetcedPosts = useFetch('blog', 'postId', postId);
    const post = fetcedPosts.posts;
    console.log(post);
    return (
        <>
            <Header />
            {post !== [] && post !== undefined && (
                <div className={styles.postContainer}>
                    <div
                        className={styles.generalInfoContainer}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${post[0].img} )`,
                        }}
                    >
                        <div className={styles.date}>
                            <span>{post[0].createdAt}</span>
                        </div>
                        <div className={styles.title}>
                            <h3>{post[0].title}</h3>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        {post[0].content.split('\n').map((line) => (
                            <span>
                                {line} <br />{' '}
                            </span>
                        ))}
                        <Link to="/blog">
                            <button className={styles.backBtn} type="button">
                                &larr; Go back{' '}
                            </button>
                        </Link>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Post;
