import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// Import Swiper styles
const Slider = ({ slides }) => {
  console.log(slides);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => {
        <SwiperSlide key={slides.image}>
          <img src={slide.image} alt="hairuct" />
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Slider;
