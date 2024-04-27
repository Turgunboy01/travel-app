import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { exploreData } from "../../components/Data";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.scss";
import HappyCarousel from "../../components/hapyCarousel/HappyCarousel";

import img1 from "../../assets/detail_img/group.png";
import img2 from "../../assets/detail_img/time.png";
import img3 from "../../assets/detail_img/location.png";
import img4 from "../../assets/detail_img/person.png";
import img5 from "../../assets/detail_img/translate.png";
import img6 from "../../assets/detail_img/tickets.png";
import img7 from "../../assets/detail_img/bus.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
const TourDetails = () => {
  const [value1, setValue] = useState("");
  const { id } = useParams();
  const [value, onChange] = useState(new Date());
  const data = exploreData.find((item) => item.id == id);

  return (
    <div className="tourDetails">
      <div className="container">
        <Link to={"/tourPage"} className="back__link">
          {" "}
          {"<"} back{" "}
        </Link>
        <div className="details">
          <div className="row">
            <motion.div
              whileInView={{ translateX: ["-30px", 0] }}
              transition={{ duration: 0.75 }}
              className="tour__imgs"
            >
              <Carousel>
                <img src={data.imgSmall3} />

                <img src={data.imgSmall1} />

                <img src={data.imgSmall2} />

                <img src={data.img} />
              </Carousel>
            </motion.div>
            <motion.div
              whileInView={{ translateX: ["30px", 0] }}
              transition={{ duration: 0.75 }}
              className="tour__content"
            >
              <h1>{data.title}</h1>
              <h4>
                from <span>{data.price} $</span>
              </h4>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <h5>Select a date</h5>
              <Calendar onChange={setValue} value={value} />
              <h5>Time</h5>
              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                placeholder="Select the time"
                // required
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="btn">Buy Now</button>
            </motion.div>
          </div>
        </div>
        <div className="testimonials">
          <motion.h1
            whileInView={{ translateY: ["-30px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            Details
          </motion.h1>
          <motion.p
            whileInView={{ translateY: ["30px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </motion.p>
          <p>
            <img src={img1} alt="" /> <span>Numbers of group:</span> 15-30
          </p>
          <p>
            <img src={img2} alt="" /> <span>Duration:</span>
            15 hours and 45 minutes
          </p>{" "}
          <p>
            <img src={img3} alt="" />{" "}
            <span>Departuring and arriving areas:</span> Lucca
          </p>{" "}
          <p>
            <img src={img4} alt="" /> <span>Guide service:</span> Included
          </p>{" "}
          <p>
            <img src={img5} alt="" /> <span>Language:</span> English, Italian
          </p>{" "}
          <p>
            <img src={img6} alt="" /> <span>Entry Fees:</span> lorem ipsum
          </p>{" "}
          <p>
            <img src={img7} alt="" /> <span>EntryTransportation:</span> bus
          </p>{" "}
        </div>
        <HappyCarousel title={"Happy Customers Says"} />
      </div>
    </div>
  );
};

export default TourDetails;
