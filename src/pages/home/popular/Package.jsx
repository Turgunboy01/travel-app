import React, { useState } from "react";
import { popular } from "../../../components/Data";
import { motion } from "framer-motion";

const Package = () => {
  const [data, setdata] = useState(popular);
  return (
    <div className="package">
      <div className="container">
        <div className="package__title">
          <motion.h1
            whileInView={{
              translateX: ["-30px", 0],
              transition: { duration: 0.5 },
            }}
          >
            Most Popular Packages
          </motion.h1>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div className="package__card" key={index}>
              <motion.img
                whileInView={{
                  scale: [0.9, 1],
                  transition: { duration: 0.5 },
                }}
                src={item.img}
                alt=""
                className="cart__img"
              />
              <div className="package__contents">
                <motion.h2
                  whileInView={{
                    translateX: ["30px", 0],
                    opacity: [0, 1],
                    transition: { duration: 0.5 },
                  }}
                >
                  {item.title}
                </motion.h2>
                <p>
                  $ <span className="price">{item.price} </span>/day
                </p>
                <div className="package__content">
                  <motion.img
                    whileInView={{
                      translateX: ["-20px", 0],
                      transition: { duration: 0.5 },
                    }}
                    src={item.contentImg1}
                    alt=""
                  />
                  <motion.p
                    whileInView={{
                      translateX: ["30px", 0],
                      opacity: [0, 1],
                      transition: { duration: 0.75 },
                    }}
                  >
                    {item.content1}
                  </motion.p>
                </div>
                <div className="package__content">
                  <motion.img
                    whileInView={{
                      translateX: ["-20px", 0],
                      transition: { duration: 0.5 },
                    }}
                    src={item.contentImg2}
                    alt=""
                  />
                  <motion.p
                    whileInView={{
                      translateX: ["30px", 0],
                      opacity: [0, 1],
                      transition: { duration: 0.75 },
                    }}
                  >
                    {item.content2}
                  </motion.p>
                </div>
                <div className="package__content">
                  <motion.img
                    whileInView={{
                      translateX: ["-30px", 0],
                      transition: { duration: 0.75 },
                    }}
                    src={item.contentImg3}
                    alt=""
                  />
                  <motion.p
                    whileInView={{
                      translateX: ["30px", 0],
                      opacity: [0, 1],
                      transition: { duration: 0.75 },
                    }}
                  >
                    {item.content3}
                  </motion.p>
                </div>
                <div className="package__content">
                  <motion.img
                    whileInView={{
                      translateX: ["-40px", 0],
                      transition: { duration: 0.75 },
                    }}
                    src={item.contentImg4}
                    alt=""
                  />
                  <motion.p
                    whileInView={{
                      translateX: ["30px", 0],
                      opacity: [0, 1],
                      transition: { duration: 0.75 },
                    }}
                  >
                    {item.content4}
                  </motion.p>
                </div>
                <button>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
