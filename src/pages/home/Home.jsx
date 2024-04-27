import React, { useState } from "react";
import "./style.scss";
import Carousel from "../../components/carousel/Carousel";
import Visit from "./visit/Visit";
import HomeOffers from "./offers/homeOffers";
import { servicesData } from "../../components/Data";
import HappyCarousel from "../../components/hapyCarousel/HappyCarousel";
import Package from "./popular/Package";
import bgVideo from "../../../public/video1.mp4";
import { motion } from "framer-motion";
const Home = () => {
  const [data, setData] = useState(servicesData);
  return (
    <div className="home">
      <div className="hero__banner">
        <video loop autoPlay muted className="bg__video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="container">
          <motion.h1
            whileInView={{
              translateX: ["-50px", 0],
              transition: { duration: 0.5 },
            }}
          >
            Enjoy in the best way!
          </motion.h1>
          <motion.p
            whileInView={{
              translateX: ["50px", 0],
              transition: { duration: 0.5 },
            }}
          >
            Enjoy our services for your trip anytime
          </motion.p>
        </div>
      </div>
      <Carousel title={"Explore Our Popular Destinantions "} />
      <Visit />
      <HomeOffers />
      <div className="services_page">
        <div className="container">
          <div className="row">
            {data?.map((item, index) => (
              <div className="service" key={index}>
                <motion.img
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0.9, 1],
                    transition: { duration: 0.75 },
                  }}
                  src={item.img}
                  alt={item.title}
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Package />
      <HappyCarousel title={"Happy Customers Says"} />
    </div>
  );
};

export default Home;
