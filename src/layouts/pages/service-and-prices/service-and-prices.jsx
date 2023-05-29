import React from 'react';
import styles from './service-and-price.module.css';
import useServiceAndPrice from '../../../hooks/use-service-and-price';
import Loader from '../../../components/loader';

// eslint-disable-next-line react/prop-types
function ServiceAndPrice({ locale }) {
    const serviceAndPrice = useServiceAndPrice(locale).data;
    const { loading } = useServiceAndPrice();
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className={styles.tableMainContainer}>
                        <div />
                        <div className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Price, €</th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceAndPrice !== undefined &&
                                    serviceAndPrice.map((item) => (
                                        <tr key={item._id}>
                                            <td>{item.service}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </div>
                        <div />
                    </div>
                </>
            )}
        </>
    );
}

export default ServiceAndPrice;
