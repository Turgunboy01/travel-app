import React, { useState } from "react";
import { SiteServicesData } from "../../components/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const TourServices = () => {
  const [data, setData] = useState(SiteServicesData);
  return (
    <div className="toursServices">
      <div className="container">
        <h1 className="services_title">Services</h1>
        <div className="row">
          {data.map((item, index) => (
            <div className="services__card" key={index}>
              <motion.img
                whileInView={{
                  opacity: [0, 1],
                  scale: [0.9, 1],
                  transition: { duration: 0.75 },
                }}
                src={item.img}
                alt=""
              />
              <motion.h3
                whileInView={{
                  translateX: ["20px", 0],
                  opacity: [0, 1],

                  transition: { duration: 0.75 },
                }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                whileInView={{
                  translateX: ["-20px", 0],
                  opacity: [0, 1],
                  transition: { duration: 0.75 },
                }}
              >
                {item.desc}
              </motion.p>
              <Link to={"/"}>Read More...</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourServices;
