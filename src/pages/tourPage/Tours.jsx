import React, { useState } from "react";
import { exploreData } from "../../components/Data";
import { useNavigate } from "react-router-dom";
import calendar from "../../assets/home_img/calendar_orange.png";
import group from "../../assets/home_img/group_oprange.png";
import { motion } from "framer-motion";
const Tours = () => {
  const [data, setData] = useState(exploreData);
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="tourPage__title">
          <h1>Tour Packages</h1>
        </div>
        <div className="tourPage__card">
          {data.map((item) => (
            <div
              className="carousel__card"
              key={item.id}
              onClick={() => navigate(`/tourDetails/${item.id}`)}
            >
              <img src={item.img} alt={item.title} className="tour__img" />
              <motion.h3
                whileInView={{ translateX: ["30px", 0] }}
                transition={{ duration: 0.75 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                whileInView={{ translateX: ["10px", 0] }}
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
                  whileInView={{
                    translateX: ["-10px", 0],
                    opacity: [0, 1],
                    transition: { duration: 0.75 },
                  }}
                >
                  {item.desc}
                </motion.p>
              </div>
              <a href="#"> Read More...</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
