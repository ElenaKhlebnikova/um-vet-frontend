import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './error-page.module.css';
import errorImg from './../../../assets/errorPic.png';
import Layout from '../../layout/layout';
function ErrorPage() {
    return (
        <Layout
            props={
                <div className={styles.mainContainer}>
                    <div className={styles.msg}>
                        <FormattedMessage
                            id="errorMsgPage"
                            defaultMessage="Oops! Something went wrong...😿"
                        />
                    </div>
                    <div>
                        <img className={styles.img} src={errorImg} />
                    </div>
                </div>
            }
        ></Layout>
    );
}

export default ErrorPage;
