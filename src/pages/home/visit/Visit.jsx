import React from "react";
import visit_img from "../../../assets/home_img/aboutImg.png";
import { motion } from "framer-motion";

const Visit = () => {
  return (
    <div>
      <div className="visit">
        <div className="container">
          <motion.img
            whileInView={{
              translateX: ["-60px", 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            src={visit_img}
            alt=""
          />
          <div className="visit__body">
            <div className="visit__title">
              <motion.h4
                whileInView={{
                  translateY: ["30px", 0],
                  opacity: [0, 1],
                  transition: { duration: 0.5 },
                }}
              >
                WELCOME TO OUR SITE!
              </motion.h4>
              <motion.h2
                whileInView={{
                  translateX: ["-30px", 0],
                  transition: { duration: 0.5 },
                }}
              >
                We are the best companyfor your visit
              </motion.h2>
            </div>
            <motion.p
              whileInView={{
                translateX: ["30px", 0],
                transition: { duration: 0.5 },
              }}
              className="visit__desc"
            >
              After decades of experience, and a whole life in Lucca, we offer
              you the most complete tourism service in the city. In addition to
              having bikes and rickshaws to have as much fun as you want, you
              have the choice of tour guides with whom to tour and drivers for
              your every need! We offer packages in the way that you get the
              most at the lowest price. Book with us and we will always be
              available for you!
            </motion.p>
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
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Visit;
