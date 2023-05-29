import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useBlog from '../../../hooks/use-blog';
import Loader from '../../../components/loader';
import styles from './post.module.css';

// eslint-disable-next-line react/prop-types
function Post({ locale }) {
    const { postId } = useParams();
    const post = useBlog(locale, postId).data;
    const { loading } = useBlog(locale, postId);

    return (
        <>
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
        </>
    );
}

export default Post;
