import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import styles from './comment-form.module.css';
import useValidate from '../../../../../hooks/useValidate';
import useComments from '../../../../../hooks/useComments';

function CommentForm() {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const doctorId = useParams();
    const date = new Date(Date.now()).toDateString();

    // passing 0 instead of phone number because phone number is not used in this form

    const { messageName, messageComment, messageRating, invalid } = useValidate(
        name,
        comment,
        0,
        rating
    );

    const { createComment } = useComments();

    const submitAComment = async function (e) {
        e.preventDefault();

        createComment({
            doctorId: doctorId.doctorId,
            name,
            date,
            comment,
            rating,
        });
    };

    return (
        <div className={styles.commentContainer}>
            <form className={styles.form}>
                <h3 style={{ marginBottom: '0rem' }}>Comments</h3>
                <div className={styles.formItem}>
                    <label>
                        Name:
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Please enter your name"
                        />
                    </label>
                    <span style={{ color: '#f57f95', fontSize: '1.5rem' }}>
                        {messageName}
                    </span>
                </div>
                <div className={styles.formItem}>
                    <label>
                        Your comment:
                        <textarea
                            type="text"
                            placeholder="Please enter your comment"
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                        />
                    </label>
                    <span style={{ color: '#f57f95', fontSize: '1.5rem' }}>
                        {messageComment}
                    </span>
                </div>
                <div className={styles.rating}>
                    <div>
                        <button type="button" onClick={() => setRating(1)}>
                            <FontAwesomeIcon
                                className={
                                    rating >= 1
                                        ? styles.starIconActive
                                        : styles.starIconInactive
                                }
                                icon={faStar}
                            />
                        </button>
                        <button type="button" onClick={() => setRating(2)}>
                            <FontAwesomeIcon
                                className={
                                    rating >= 2
                                        ? styles.starIconActive
                                        : styles.starIconInactive
                                }
                                icon={faStar}
                            />
                        </button>
                        <button type="button" onClick={() => setRating(3)}>
                            <FontAwesomeIcon
                                className={
                                    rating >= 3
                                        ? styles.starIconActive
                                        : styles.starIconInactive
                                }
                                icon={faStar}
                            />
                        </button>
                        <button type="button" onClick={() => setRating(4)}>
                            <FontAwesomeIcon
                                className={
                                    rating >= 4
                                        ? styles.starIconActive
                                        : styles.starIconInactive
                                }
                                icon={faStar}
                            />
                        </button>
                        <button type="button" onClick={() => setRating(5)}>
                            <FontAwesomeIcon
                                className={
                                    rating >= 5
                                        ? styles.starIconActive
                                        : styles.starIconInactive
                                }
                                icon={faStar}
                            />
                        </button>
                    </div>
                    <div style={{ margin: '2rem 2rem' }}>
                        <span style={{ color: '#f57f95', fontSize: '1.5rem' }}>
                            {messageRating}
                        </span>
                    </div>
                </div>

                <button
                    className={invalid ? styles.btnSendInvalid : styles.btnSend}
                    disabled={invalid}
                    type="submit"
                    value="submit"
                    onClick={(e) => submitAComment(e)}
                >
                    Confirm
                </button>
            </form>
        </div>
    );
}

export default CommentForm;
