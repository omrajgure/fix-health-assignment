import React from "react";
import styles from "./right_button.module.css";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/right_arrow.svg";
export const Rightbutton = () => {
  const swiper = useSwiper();
  const [isEnd, set_isEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      set_isEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <div className={styles.rightnavi}>
      {!isEnd ? (
        <RightArrow
          height={"100%"}
          width={"100%"}
          onClick={() => {
            swiper.slideNext();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
