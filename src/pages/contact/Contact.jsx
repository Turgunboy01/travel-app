import React from "react";
import "./style.scss";
import contact1 from "../../assets/home_img/location2.png";
import contact2 from "../../assets/home_img/Phone.png";
import contact3 from "../../assets/home_img/email.png";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className="contact">
      <div className="contact_content">
        <div className="container">
          <motion.div
            whileInView={{
              translateX: ["-20px", 0],
              opacity: [0, 1],
              transition: { duration: 0.75 },
            }}
            className="contact__left"
          >
            <h1>Get In Touch!</h1>
            <p>
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <div className="contact__box">
              <img src={contact1} alt="" />{" "}
              <p>Piazza Napoleone, Lucca, Tuscany</p>
            </div>
            <div className="contact__box">
              <img src={contact2} alt="" /> <p> +39 346 368 5708</p>
            </div>
            <div className="contact__box">
              <img src={contact3} alt="" /> <p> italiainlimo@gmail.com</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{
              translateX: ["20px", 0],
              opacity: [0, 1],
              transition: { duration: 0.75 },
            }}
            className="contact__right"
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name and Surname</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name and surname"
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your Meesage"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button>Send Message</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.2772446023174!2d10.502680092450335!3d43.84138493126618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5838a16d74ecb%3A0x975f20ba2efb457e!2zUC56YSBOYXBvbGVvbmUsIDU1MTAwIEx1Y2NhIExVLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2s!4v1711527299097!5m2!1sru!2s"></iframe>
      </div>
    </div>
  );
};

export default Contact;
