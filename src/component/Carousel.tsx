'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/app/carousel.css"



export const Carousel = ({ children, data }: { children?: React.ReactNode, data: string[] }) => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      grabCursor
      centeredSlides
      slidesPerView="auto"
      effect="coverflow"
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      <div className="swiper-wrapper">
        {data.map((slide,i) => (
          <SwiperSlide
            key={i}
            style={{
              // backgroundImage: `url(${slide})`,
            }}
          >
            {children && children}
          </SwiperSlide>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};