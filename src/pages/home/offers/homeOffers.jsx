import React from "react";
import offerVideo from "../../../../public/offerVideo.mp4";
import { motion } from "framer-motion";
const HomeOffers = () => {
  return (
    <div className="home__offers">
      <video loop autoPlay muted className="offerVideo">
        <source src={offerVideo} type="video/mp4" />
      </video>
      <div className="container">
        <motion.div
          whileInView={{
            translateX: ["30px", 0],

            transition: { duration: 0.5 },
            opacity: [0, 1],
          }}
          className="offer__content"
        >
          <motion.h1
            whileInView={{
              translateX: ["-30px", 0],
              transition: { duration: 0.5 },
              opacity: [0, 1],
            }}
          >
            Get Special Offers for Organizations
          </motion.h1>
          <motion.p
            whileInView={{
              opacity: [0, 1],
              transition: { duration: 0.75 },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </motion.p>
          <a href="#">Contact Us</a>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeOffers;
