/* eslint-disable operator-linebreak */
import React from "react";
import Header from "../../header/header";
import styles from "./service-and-price.module.css";
import Footer from "../../footer/footer";
import useFetch from "../../../hooks/useFetch";

function ServiceAndPrice() {
  const fetchedData = useFetch("service-and-prices");
  const serviceAndPrice = fetchedData.service;
  return (
    <>
      <Header />
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
                <tr>
                  <td>{item.service}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </div>
        <div />
      </div>
      <Footer />
    </>
  );
}

export default ServiceAndPrice;
