import React, { useRef, useState } from "react";
import "./style.scss";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { exploreData } from "../Data";
import calendar from "../../assets/home_img/calendar_orange.png";
import group from "../../assets/home_img/group_oprange.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Carousel = ({ title }) => {
  const [data, setData] = useState(exploreData);

  const navigate = useNavigate();
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="carousel__page">
      <div className="container">
        <div className="carousel__title">
          <motion.h2
            whileInView={{ translateX: ["-30px", 0] }}
            transition={{ duration: 0.75 }}
          >
            {title}{" "}
          </motion.h2>
          <div className="arrows">
            <FaRegArrowAltCircleLeft
              className="left__arrow"
              onClick={() => navigation("left")}
            />

            <FaRegArrowAltCircleRight
              className="left__arrow"
              onClick={() => navigation("right")}
            />
          </div>
        </div>
        <div className="carousel__body" ref={carouselContainer}>
          {data?.map((item) => (
            <div
              className="carousel__card"
              key={item.id}
              onClick={() => navigate(`/tourDetails/${item.id}`)}
            >
              <motion.img
                whileInView={{ scale: [0.91, 1] }}
                transition={{ duration: 0.85 }}
                src={item.img}
                alt={item.title}
                className="cart_img"
              />
              <motion.h3
                whileInView={{ translateX: ["-10px", 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                whileInView={{ opacity: [0.2, 1] }}
                transition={{ duration: 0.75 }}
              >
                from <strong className="price">{item.price} $</strong>{" "}
              </motion.p>
              <div className="days">
                <p>
                  <img src={calendar} alt="" />
                  {item.day}
                </p>
                <p>
                  <img src={group} alt="" />
                  {item.group}
                </p>
              </div>
              <div className="desc">
                <motion.p
                  whileInView={{ translateX: ["-30px", 0], opacity: [0, 1] }}
                  transition={{ duration: 0.75 }}
                >
                  {item.desc}
                </motion.p>
              </div>
              <a href="#"> Read More...</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
