import React from "react";
import { Link } from "react-router-dom";
import aboutVideo from "../../../../public/video2.mp4";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner">
      <video loop autoPlay muted className="bg__video">
        <source src={aboutVideo} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row">
          <motion.h1
            whileInView={{ translateX: ["-30px", 0] }}
            transition={{ duration: 0.75 }}
          >
            Our team cares about your full relax
          </motion.h1>
          <motion.p
            whileInView={{ translateX: ["30px", 0] }}
            transition={{ duration: 0.75 }}
          >
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </motion.p>
          <Link to="/tourPage">View our Tour Packages</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
