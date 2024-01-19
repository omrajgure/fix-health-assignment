import React from "react";
import styles from "./left_button.module.css";
import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/left_arrow.svg";
export const Leftbutton = () => {
  const swiper = useSwiper();
  const [isBeginning, set_isBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      set_isBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftnavi}>
      {!isBeginning ? (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
