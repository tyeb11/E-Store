import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  swiper,
  swiperSlide,
  swiperSliderImg,
} from "../styles/ImageStepper.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

export default function App({ images }) {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={swiper}
      >
        <SwiperSlide style={swiperSlide}>
          <img style={swiperSliderImg} src={images[0]} />
        </SwiperSlide>
        <SwiperSlide style={swiperSlide}>
          <img style={swiperSliderImg} src={images[1]} />
        </SwiperSlide>
        <SwiperSlide style={swiperSlide}>
          <img style={swiperSliderImg} src={images[2]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
