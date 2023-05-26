import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import styles from './comment-form.module.css';
import { FormattedMessage, useIntl } from 'react-intl';
import useComments from '../../../../../hooks/use-comments';
import useValidateComment from '../../../../../hooks/use-validate-comment';

function CommentForm() {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const doctorId = useParams();
    const date = new Date(Date.now()).toDateString();
    const intl = useIntl();
    const { errorName, errorComment, errorRating, invalid } =
        useValidateComment(name, comment, 0, rating);

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
                <h3 style={{ marginBottom: '0rem' }}>
                    <FormattedMessage id="comments" defaultMessage="Comments" />
                </h3>
                <div className={styles.formItem}>
                    <label>
                        <FormattedMessage id="name" defaultMessage="Name" />
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder={intl.formatMessage({
                                defaultMessage: 'Please enter your name',
                                id: 'namePlaceholder',
                            })}
                        />
                    </label>
                    <span style={{ color: '#f57f95', fontSize: '1.5rem' }}>
                        {errorName}
                    </span>
                </div>
                <div className={styles.formItem}>
                    <label>
                        <FormattedMessage
                            id="comment"
                            defaultMessage="Your comment"
                        />
                        <textarea
                            type="text"
                            placeholder={intl.formatMessage({
                                defaultMessage: 'Please enter your comment',
                                id: 'commentPlaceholder',
                            })}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                        />
                    </label>
                    <span style={{ color: '#f57f95', fontSize: '1.5rem' }}>
                        {errorComment}
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
                            {errorRating}
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
                    <FormattedMessage
                        id="confirmBtn"
                        defaultMessage="Confirm"
                    />
                </button>
            </form>
        </div>
    );
}

export default CommentForm;
