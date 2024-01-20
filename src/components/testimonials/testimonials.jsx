import React from "react";
import styles from "./testimonials.module.css";
import { Single_testimonial } from "./single_testimonial/single_testimonial";
import User1 from "../../assets/user_1.jpg";
import User2 from "../../assets/user_2.jpg";
import User3 from "../../assets/user_3.jpg";
import User4 from "../../assets/user_4.jpg";
import User5 from "../../assets/user_5.jpg";
import User6 from "../../assets/user_6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Leftbutton } from "./left_button/left_button";
import { Rightbutton } from "./right_button/right_button";
let user1 = {
  name: "Ayush kumar",
  heading: "Bye Bye to Back pain !!",
  image: User1,
  detail: "Loved the personal touch of the physio's doctor and care manager",
};
let user2 = {
  name: "Jennifer williams",
  heading: "Able to sleep peacefully after 15 years",
  image: User2,
  detail: "They Worked around timezone variations to accommodate my schedule",
};
let user3 = {
  name: "Rajendra shetty",
  heading: "Knee pain is gone",
  image: User3,
  detail:
    "I realized treatment could be done remotely,eliminating need for inperson visits.",
};
let user4 = {
  name: "Aarav Patel",
  heading: "Quick Recovery, Great Support",
  image: User4,
  detail:
    "Recovering from my injury was made much easier with the support of the dedicated team at Fix Health. They guided me every step of the way.",
};
let user5 = {
  name: "Arjun Gupta",
  heading: "Excellent Service",
  image: User5,
  detail:
    "The convenience of remote treatment and the professionalism of the team exceeded my expectations. I highly recommend Fix Health to anyone in need.",
};
let user6 = {
  name: "Kavya Kapoor",
  heading: "Life-changing Experience",
  image: User6,
  detail:
    "The physiotherapy sessions at Fix Health have truly transformed my life. I am grateful for the expert care and personalized attention.",
};
export const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <h2 style={{ color: "white", textAlign: "center" }}>Testimonials</h2>
      <div className={styles.gridwrapper}>
        <Swiper
          style={{ padding: "0px 30px", marginLeft: "0" }}
          initialSlide={0}
          modules={[Navigation]}
          spaceBetween={40}
          allowTouchMove
          slidesPerView={"auto"}
          breakpoints={{
            840: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1210: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <Leftbutton />
          <Rightbutton />

          <SwiperSlide>
            <Single_testimonial user={user1} />
          </SwiperSlide>
          <SwiperSlide>
            <Single_testimonial user={user2} />
          </SwiperSlide>
          <SwiperSlide>
            <Single_testimonial user={user3} />
          </SwiperSlide>
          <SwiperSlide>
            <Single_testimonial user={user4} />
          </SwiperSlide>
          <SwiperSlide>
            <Single_testimonial user={user5} />
          </SwiperSlide>
          <SwiperSlide>
            <Single_testimonial user={user6} />
          </SwiperSlide>
        </Swiper>
        {/* <Single_testimonial user={user1} />
        <Single_testimonial user={user2} />
        <Single_testimonial user={user3} />
        <Single_testimonial user={user4} />
        <Single_testimonial user={user5} />
        <Single_testimonial user={user6} /> */}
      </div>
    </div>
  );
};
