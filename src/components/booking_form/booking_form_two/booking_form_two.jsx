import React, { useState, useEffect } from "react";
import styles from "./booking_form_two.module.css";
import { CustomButton } from "../../button/button";
import { enqueueSnackbar } from "notistack";
export const Booking_form_two = ({
  set_second_step,
  set_age,
  age,
  set_city,
  city,
}) => {
  const [company, set_company] = useState("");

  const handleAge = (e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
    set_age(onlyNumbers);
  };
  const handleCity = (e) => {
    set_city(e.target.value);
  };
  const handleCompany = (e) => {
    set_company(e.target.value);
  };
  const validateInput = (val) => {
    if (age.length === 0) {
      enqueueSnackbar("Please enter age", {
        variant: "warning",
      });
    } else if (city.length === 0) {
      enqueueSnackbar("Please enter City", {
        variant: "warning",
      });
    } else if (company.length === 0) {
      enqueueSnackbar("Please enter Company name", {
        variant: "warning",
      });
    }
    if (age.length !== 0 && city.length !== 0 && company.length !== 0) {
      set_second_step(val);
    }
  };

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
      <div className={styles.buttonWrapper}>
        <CustomButton
          text={"Continue"}
          form={true}
          handleCLick={validateInput}
        />
      </div>
    </div>
  );
};
