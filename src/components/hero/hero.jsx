import React from "react";
import { useState } from "react";
import styles from "./hero.module.css";
import { Navbar } from "../navbar/navbar";
import { BookingForm } from "../booking_form/bookingForm";
export const Hero = ({ InCityDoctors, set_InCityDoctors }) => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <Navbar />{" "}
      <BookingForm
        InCityDoctors={InCityDoctors}
        set_InCityDoctors={set_InCityDoctors}
      />
    </div>
  );
};
