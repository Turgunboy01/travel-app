import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { happyData } from "../Data";
import "./style.scss";
import { motion } from "framer-motion";
const HappyCarousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="happyCarousel">
      <div className="container">
        <div className="title">
          <h1>Happy Customers Says</h1>
        </div>
        <Slider {...settings}>
          {happyData.map((item) => (
            <div className="userCarousel" key={item.id}>
              <motion.img
                whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
                src={item.img}
                alt={item.title}
              />
              <div className="carousel_content">
                <motion.h1
                  whileInView={{ translateX: ["30px", 0], opacity: [0, 1] }}
                  transition={{ duration: 0.75 }}
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  whileInView={{ translateX: ["-30px", 0], opacity: [0, 1] }}
                  transition={{ duration: 0.75 }}
                >
                  {item.desc.slice(1, 150)}
                </motion.p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HappyCarousel;
