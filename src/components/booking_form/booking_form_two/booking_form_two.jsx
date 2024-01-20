import React from "react";
import styles from "./booking_form_two.module.css";
export const Booking_form_two = ({
  age,
  city,
  company,
  handleAge,
  handleCity,
  handleCompany,
}) => {
  return (
    <div>
      <div className={styles.progressDiv}>
        <div className={styles.progressBar}></div>
        <div className={styles.progressValue}>2 of 3</div>
      </div>
      <h2>Help us understand you better</h2>
      <div className={styles.inputwrapper}>
        <input value={age} placeholder="Age" onChange={handleAge} />
        <div className={styles.horizontalLine}></div>
        <input value={city} placeholder="City" onChange={handleCity} />
        <div className={styles.horizontalLine}></div>
        <input value={company} placeholder="Company" onChange={handleCompany} />
        <div className={styles.horizontalLine}></div>
      </div>
    </div>
  );
};
