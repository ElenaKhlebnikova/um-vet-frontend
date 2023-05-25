import React from 'react';
import styles from './error-page.module.css';
import errorImg from './../../../assets/errorPic.png';
import Header from '../../header/header';
import Footer from '../../footer/footer';
function ErrorPage() {
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.msg}>
                    Oops! Something went wrong...😿
                </div>
                <div>
                    <img className={styles.img} src={errorImg} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;
