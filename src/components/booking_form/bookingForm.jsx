import React, { useEffect } from "react";
import styles from "./bookingForm.module.css";
import Userimg from "../../assets/user_img.png";
import indianFlag from "../../assets/indian_flag.png";
import { CustomButton } from "../button/button";
import { Booking_form_two } from "./booking_form_two/booking_form_two";
import { Booking_form_three } from "./booking_form_three/booking_form_three";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

export const BookingForm = ({ InCityDoctors, set_InCityDoctors }) => {
  const [rawData, set_rawData] = useState([]);
  const urlCity = window.location.pathname.split("/")[1].toLowerCase();
  useEffect(() => {
    if (urlCity) {
      performfetch();
    }
  }, [urlCity]);
  useEffect(() => {
    if (rawData.length > 0) {
      if (urlCity) {
        getDoctorsInYourCity();
      }
    }
  }, [rawData]);

  const getDoctorsInYourCity = () => {
    if (rawData.length > 0) {
      const filtered_data = rawData.filter((doctor) => {
        return doctor.city === city.toLowerCase();
      });
      set_InCityDoctors(filtered_data);
    }
  };

  const performfetch = async () => {
    try {
      const res = await fetch("https://fixhealthbackend.onrender.com/doctors");
      const data = await res.json();
      set_rawData(data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(InCityDoctors);

  const [name, set_name] = useState("");
  const [number, set_number] = useState("");
  const [age, set_age] = useState("");
  const [city, set_city] = useState(urlCity || "");
  const [First_step, set_First_step] = useState(false);
  const [second_step, set_second_step] = useState(false);
  const [submit, set_submit] = useState(false);

  // useEffect(() => {
  //   if (submit) {
  //     set_First_step(false);
  //     set_second_step(false);
  //     set_submit(false);
  //     set_name("");
  //     set_number("");
  //     set_age("");
  //     set_city("");
  //   }
  // }, [submit]);

  const handleNameChange = (e) => {
    set_name(e.target.value);
  };
  const handleNumberChange = (e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    set_number(onlyNumbers);
  };
  const validateInput = (val) => {
    if (name.length === 0) {
      enqueueSnackbar("Please enter Name", {
        variant: "warning",
      });
    } else if (number.length !== 10) {
      enqueueSnackbar("Enter appropriate number", {
        variant: "warning",
      });
    } else {
      handleClick(val);
    }
  };
  const handleClick = (val) => {
    set_First_step(val);
  };

  let Main_form = (
    <div className={styles.wrapper_inner}>
      <h2 style={{ fontWeight: "400" }}>Book an Appointment for FREE</h2>
      <p style={{ color: "#008b8b" }}>
        100+ Expert Physiotherapists for 100+ conditions
      </p>
      <div className={styles.inputwrapper}>
        <div className={styles.inputinner}>
          <div style={{ height: "2rem", width: "3rem" }}>
            <img alt="Userimg" src={Userimg} height={"100%"} width={"100%"} />
          </div>
          <input
            value={name}
            placeholder="Your Name"
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.inputinner}>
          <div style={{ height: "2rem", width: "3rem" }}>
            <img
              height={"100%"}
              width={"100%"}
              src={indianFlag}
              alt="indian flag"
            />
          </div>
          <input
            type="tel"
            value={number}
            placeholder="+91"
            onChange={handleNumberChange}
          />
        </div>
        <div className={styles.horizontalLine}></div>
      </div>
      <CustomButton
        text={"Start Your Recovery"}
        form={true}
        handleCLick={validateInput}
      />
    </div>
  );
  return (
    <div className={styles.booking_form}>
      {!First_step ? (
        Main_form
      ) : !second_step ? (
        <Booking_form_two
          set_second_step={set_second_step}
          set_age={set_age}
          age={age}
          set_city={set_city}
          city={city}
        />
      ) : (
        <Booking_form_three
          age={age}
          city={city}
          submit={submit}
          set_submit={set_submit}
          InCityDoctors={InCityDoctors}
          set_InCityDoctors={set_InCityDoctors}
          rawData={rawData}
          set_rawData={set_rawData}
        />
      )}
    </div>
  );
};
