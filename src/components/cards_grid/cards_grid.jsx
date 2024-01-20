import React from "react";
import styles from "./cards_grid.module.css";
import { Card } from "../card/card";
export const Cards_grid = ({ InCityDoctors }) => {
  return (
    <div>
      {InCityDoctors.length > 0 ? (
        <h1 style={{ textAlign: "center", color: "white" }}>
          Available doctors in your area
        </h1>
      ) : (
        <div className={styles.NoDoctor}>
          <div>
            <h2>No doctors available in your area</h2>
            <p>
              We are currently available in Mumbai, Pune, Bangalore, Hyderabad
              and Nagpur
            </p>
          </div>
        </div>
      )}

      <div className={styles.wrapper}>
        {InCityDoctors.length > 0 &&
          InCityDoctors.map((doctor) => {
            return (
              <Card
                name={doctor.name}
                city={doctor.city}
                expertise={doctor.expertise}
                image={process.env.PUBLIC_URL + doctor.image}
              />
            );
          })}
      </div>
    </div>
  );
};
