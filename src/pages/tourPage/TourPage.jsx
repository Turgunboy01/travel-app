import React, { useState } from "react";
import "./style.scss";
import Tours from "./Tours";
import HappyCarousel from "../../components/hapyCarousel/HappyCarousel";
import TourServices from "./TourServices";

const TourPage = () => {
  return (
    <div className="tourPage">
      <Tours />

      <TourServices />
      <HappyCarousel title={"Happy Customers Says"} />
    </div>
  );
};

export default TourPage;
