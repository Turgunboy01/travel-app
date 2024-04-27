import React, { useState } from "react";
import { adventageData } from "../../../components/Data";

const Adventage = () => {
  const [data, setdata] = useState(adventageData);
  return (
    <div className="adventage">
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="adventage_card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adventage;
