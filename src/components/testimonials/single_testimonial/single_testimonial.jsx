import React from "react";
import styles from "./single_testimonial.module.css";
export const Single_testimonial = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageDiv}>
        <img
          style={{ borderRadius: "50%" }}
          height={"100%"}
          width={"100%"}
          src={user.image}
          alt={user.name}
        />
      </div>
      <div className={styles.infoDiv}>
        <h3>{user.heading}</h3>
        <p style={{ fontSize: "12px" }} className={styles.ellipsis}>
          {user.detail}
        </p>
      </div>
      <p style={{ fontWeight: "bold", marginTop: "1rem" }}>{user.name}</p>
    </div>
  );
};
