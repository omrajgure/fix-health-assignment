import React from "react";
import styles from "./booking_form_three.module.css";
export const Booking_form_three = ({ age, complaints, handleComplaints }) => {
  return (
    <div>
      <div className={styles.progressDiv}>
        <div className={styles.progressBar}></div>
        <div className={styles.progressValue}>3 of 3</div>
      </div>
      <h2>Help us choose the right physio for you</h2>
      <div className={styles.inputwrapper}>
        <textarea
          value={complaints}
          placeholder="Chief complaints"
          onChange={handleComplaints}
        />
      </div>
      <div className={styles.horizontalLine}></div>
      {/* conditional rendering based on age */}
      {age >= 40 && (
        <div>
          <h4>Do you have any previous experience with physiotherapy ?</h4>
          <div className={styles.dropdown}>
            <select name="experience">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
