import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useBlog from '../../../hooks/use-blog';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Loader from '../../../components/loader';
import styles from './post.module.css';

function Post() {
    const { postId } = useParams();
    const post = useBlog(postId).data;
    const { loading } = useBlog(postId);

    return (
        <>
            <Header />

            {loading ? (
                <Loader />
            ) : (
                <>
                    {post !== {} && post.title !== undefined && (
                        <div className={styles.postContainer}>
                            <div
                                className={styles.generalInfoContainer}
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${post.img} )`,
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
                                {post.content.split('\n').map((line) => (
                                    <span key={line}>
                                        {line} <br />{' '}
                                    </span>
                                ))}
                                <Link to="/blog">
                                    <button
                                        className={styles.backBtn}
                                        type="button"
                                    >
                                        &larr; Go back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            )}
            <Footer />
        </>
    );
}

export default Post;
