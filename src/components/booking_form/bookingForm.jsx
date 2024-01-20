import React, { useEffect } from "react";
import styles from "./bookingForm.module.css";
import Userimg from "../../assets/user_img.png";
import indianFlag from "../../assets/indian_flag.png";
import { CustomButton } from "../button/button";
import { Booking_form_two } from "./booking_form_two/booking_form_two";
import { Booking_form_three } from "./booking_form_three/booking_form_three";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-scroll";

export const BookingForm = ({
  InCityDoctors,
  set_InCityDoctors,
  set_isFetching,
  myref,
}) => {
  const scrollOptions = {
    to: "result",
    smooth: true,
  };
  const [rawData, set_rawData] = useState([]);
  const urlCity = window.location.pathname.split("/")[1].toLowerCase();

  useEffect(() => {
    if (urlCity) {
      myref.current.scrollIntoView({ behavior: "smooth" });
      performfetch();
    }
  }, [urlCity]);

  useEffect(() => {
    if (rawData.length > 0) {
      getDoctorsInYourCity();
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
      set_isFetching(true);
      const res = await fetch("https://fixhealthbackend.onrender.com/doctors");
      const data = await res.json();

      set_rawData(data);
    } catch (e) {
      console.log(e);
    } finally {
      set_isFetching(false);
    }
  };

  const [name, set_name] = useState("");
  const [number, set_number] = useState("");
  const [age, set_age] = useState("");
  const [city, set_city] = useState(urlCity || "");
  const [company, set_company] = useState("");
  const [complaints, set_complaints] = useState("");

  const handleNameChange = (e) => {
    set_name(e.target.value);
  };
  const handleNumberChange = (e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    set_number(onlyNumbers);
  };
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
  const handleComplaints = (e) => {
    set_complaints(e.target.value);
  };

  const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return Main_form;
    } else if (page === 1) {
      return (
        <Booking_form_two
          age={age}
          city={city}
          company={company}
          handleAge={handleAge}
          handleCity={handleCity}
          handleCompany={handleCompany}
        />
      );
    } else {
      return (
        <Booking_form_three
          age={age}
          complaints={complaints}
          handleComplaints={handleComplaints}
        />
      );
    }
  };

  // ***************************************************************//
  const validateInput = (val) => {
    if (page === 0) {
      if (name.length === 0) {
        enqueueSnackbar("Please enter Name", {
          variant: "warning",
        });
      } else if (number.length !== 10) {
        enqueueSnackbar("Enter appropriate number", {
          variant: "warning",
        });
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
    if (page === 1) {
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
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
    if (page === 2) {
      if (complaints.length === 0) {
        enqueueSnackbar("Please fill the complaints field", {
          variant: "warning",
        });
      } else {
        performfetch();
      }
    }
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
    </div>
  );
  return (
    <div className={styles.booking_form}>
      {PageDisplay()}
      <Link {...(complaints.length > 0 && scrollOptions)}>
        <div className={styles.buttonWrapper}>
          <CustomButton
            text={page === 0 ? "Start Your Recovery" : "Continue"}
            form={true}
            handleCLick={validateInput}
          />
        </div>
      </Link>
    </div>
  );
};
