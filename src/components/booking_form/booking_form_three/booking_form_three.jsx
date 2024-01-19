import React, { useState, useEffect } from "react";
import styles from "./booking_form_three.module.css";
import { CustomButton } from "../../button/button";
import { Link } from "react-scroll";
import { enqueueSnackbar } from "notistack";
export const Booking_form_three = ({
  age,
  city,
  submit,
  set_submit,
  InCityDoctors,
  set_InCityDoctors,
  rawData,
  set_rawData,
}) => {
  const [complaints, set_complaints] = useState("");
  const handleComplaints = (e) => {
    set_complaints(e.target.value);
  };

  useEffect(() => {
    performfetch();
  }, []);
  useEffect(() => {
    if (submit) {
      getDoctorsInYourCity();
    }
  }, [submit]);
  const performfetch = async () => {
    try {
      const res = await fetch("https://fixhealthbackend.onrender.com/doctors");
      const data = await res.json();
      set_rawData(data);
    } catch (e) {
      console.log(e);
    }
  };
  const getDoctorsInYourCity = () => {
    if (rawData.length > 0) {
      const filtered_data = rawData.filter((doctor) => {
        return doctor.city === city.toLowerCase();
      });
      set_InCityDoctors(filtered_data);
    }
  };
  const ValidateInput = (val) => {
    if (complaints.length === 0) {
      enqueueSnackbar("Please fill the complaints field", {
        variant: "warning",
      });
    }
    if (complaints.length > 0) {
      set_submit(val);
    }
  };
  const scrollOptions = {
    to: "result",
    smooth: true,
  };

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
      <Link {...(complaints.length > 0 && scrollOptions)}>
        <div className={styles.buttonWrapper}>
          <CustomButton
            text={"Continue"}
            form={true}
            handleCLick={ValidateInput}
          />
        </div>
      </Link>
    </div>
  );
};
