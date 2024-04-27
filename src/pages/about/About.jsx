import React from "react";
import "./style.scss";
import Banner from "./aboutBanner/Banner";
import about_img from "../../assets/about_img/about_img.png";
import Carousel from "../../components/carousel/Carousel";
import Adventage from "./adventeg/Adventage";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <Banner />{" "}
      <div className="about__contents">
        <div className="container">
          <div className="row">
            <motion.img
              whileInView={{ translateX: ["-30px", 0] }}
              transition={{ duration: 0.75 }}
              src={about_img}
              className="about__img"
            />
            <motion.div
              whileInView={{ translateX: ["30px", 0] }}
              transition={{ duration: 0.75 }}
              className="about__content"
            >
              <h3>WELCOME TO OUR SITE!</h3>
              <h2>We Are The Center Of LuccaTo Offer You The Best</h2>
              <p className="desc">
                We are right in the center of Lucca to offer you the real city
                life! With years of experience in practically every tourism
                sector, with us you can find complete packages at the lowest
                price, to travel and learn and have fun all without worries and
                without stress. What are you waiting for, book a bright evening,
                a trip to beautiful Tuscany or a personal tour for you!
              </p>
              <div className="visit__boxs">
                <div className="box">
                  <h2>20+</h2>
                  <p>Years Experience</p>
                </div>{" "}
                <div className="box">
                  <h2>100+</h2>
                  <p>Happy Customer</p>
                </div>
                <div className="box">
                  <h2>15+</h2>
                  <p>Choice of Services</p>
                </div>{" "}
                <div className="box">
                  <h2>10+</h2>
                  <p>Professional Guides</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Adventage />
      <Carousel title={"Explore Our Popular Destinantions"} />
    </div>
  );
};

export default About;
