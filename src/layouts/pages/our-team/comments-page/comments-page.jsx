import React from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faGlasses,
    faEnvelope,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from '../../../header/header';
import Footer from '../../../footer/footer';
import styles from './comments-page.module.css';
import CommentForm from './comment-form/comment-form';
import useDoctors from '../../../../hooks/useDoctors';
import useComments from '../../../../hooks/useComments';

function CommentsPage() {
    const { doctorId } = useParams();
    const doctor = useDoctors(doctorId);
    const { comments } = useComments(doctorId);

    return (
        <>
            <Header />
            <Link to="/our-team">
                <button className={styles.backBtn} type="button">
                    &larr; Go back{' '}
                </button>
            </Link>
            <div className={styles.mainContainer}>
                <div>
                    <img
                        className={styles.img}
                        src={doctor.img}
                        alt={doctor.name}
                    />
                </div>
                <div className={styles.doctorsInfo}>
                    <ul className={styles.generalInfo}>
                        <li style={{ fontWeight: 700, fontSize: '5rem' }}>
                            {doctor.name}
                        </li>
                        <li>
                            <span className={styles.span}>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </span>
                            {doctor.education}
                        </li>
                        <li>
                            <span className={styles.span}>
                                <FontAwesomeIcon icon={faGlasses} />
                            </span>
                            {doctor.specialization}
                        </li>
                        <li>
                            <span className={styles.span}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            {doctor.email}
                        </li>
                    </ul>
                </div>
                <div className={styles.about}>
                    <div>{doctor.about}</div>
                    <button type="button" className={styles.btn}>
                        <Link to={`/${doctor.id}/appointments`}>
                            Book an appointment
                        </Link>
                    </button>
                </div>
            </div>

            <div>
                <CommentForm />
                {comments !== undefined &&
                    comments !== [] &&
                    comments.map((com) => (
                        <div key={com._id} className={styles.commentContainer}>
                            <div className={styles.comment}>
                                <p style={{ fontWeight: 700 }}>{com.name}</p>

                                <p>{com.comment}</p>
                                <div className={styles.ratingOnComment}>
                                    <FontAwesomeIcon
                                        className={
                                            com.rating >= 1
                                                ? styles.starIconActive
                                                : styles.starIconInactive
                                        }
                                        style={{ fontSize: '2.5rem' }}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={
                                            com.rating >= 2
                                                ? styles.starIconActive
                                                : styles.starIconInactive
                                        }
                                        style={{ fontSize: '2.5rem' }}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={
                                            com.rating >= 3
                                                ? styles.starIconActive
                                                : styles.starIconInactive
                                        }
                                        style={{ fontSize: '2.5rem' }}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={
                                            com.rating >= 4
                                                ? styles.starIconActive
                                                : styles.starIconInactive
                                        }
                                        style={{ fontSize: '2.5rem' }}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={
                                            com.rating >= 5
                                                ? styles.starIconActive
                                                : styles.starIconInactive
                                        }
                                        style={{ fontSize: '2.5rem' }}
                                        icon={faStar}
                                    />
                                </div>
                                <p style={{ fontSize: '1.5rem' }}>
                                    Published on: {com.date}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <Footer />
        </>
    );
}

export default CommentsPage;
