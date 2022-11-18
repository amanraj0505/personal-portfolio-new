import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/man.png";
import Image3 from "../../assets/man.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    id: 1,
    image: Image1,
    title: "Srivatshan Balasubramanian",
    subtitle: "Manager",
    comment:
      " You have demonstrated quick learning on new technology areas and played an important role in multiple client implementations like DJO, Avianca, Baxter and ISA. Apart from individual contributions you have also helped the team to resolve issues. We appreciate your proactiveness and strong technical skills.",
  },
  {
    id: 2,
    image: Image3,
    title: "Srivatshan Balasubramanian",
    subtitle: "Manager",
    comment:
      "Appreciation for Development, completion and submission of Inteliapp Oneapp Mobile app into the app stores. We appreciate your proactiveness and strong technical skills and help.",
  },
  {
    id: 3,
    image: Image3,
    title: "Inteliserve",
    subtitle: "Team",
    comment:
      "Congratulations on your exemplary contributions towards the development of InteliApp-oneApp. You have demonstrated quick learning and moving from PoC to implementation with great agility.",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Testmonials</h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        grabCursor={true}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
