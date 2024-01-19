import React from "react";
import styles from "./card.module.css";
import { CustomButton } from "../button/button";
export const Card = ({ name, city, expertise, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img
          style={{ borderRadius: "8px" }}
          height={"100%"}
          width={"100%"}
          src={image}
          alt="pic"
        />
      </div>
      <div className={styles.infoDiv}>
        <h2>{name}</h2>
        <p>{city.toUpperCase()}</p>
        <div className={styles.expertise}>{expertise}</div>
        <div className={styles.buttonDiv}>
          <CustomButton text={"Know more"} />
        </div>
      </div>
    </div>
  );
};
