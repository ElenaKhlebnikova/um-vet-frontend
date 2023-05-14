import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import styles from "./service-and-price.module.css";
import Footer from "../../footer/footer";

function ServiceAndPrice() {
  const [serviceAndPrice, setServiceAndPrice] = useState([]);
  useEffect(() => {
    const fetchFunction = async function () {
      await fetch("http://localhost:5000/service-and-prices", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data !== undefined) {
            setServiceAndPrice(data.data.service);
          }
        });
    };

    fetchFunction();
  }, []);
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
            {serviceAndPrice.map((item) => (
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
