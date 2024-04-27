import React from "react";
import "./style.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import logo from "../../assets/home_img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="line"></div>
        <div className="footer__body">
          <div className="box">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Bike and Rickshaw rental</a>
              </li>
              <li>
                <a href="#">Guided Tours of Lucca</a>
              </li>
              <li>
                <a href="#">Guided Bike Tour of Lucca</a>
              </li>
              <li>
                <a href="#">Trip In The Tuscan Hills</a>
              </li>
              <li>
                <a href="#">Transportation With Luxury Cars</a>
              </li>
              <li>
                <a href="#">Wine Tours By Bus With Guide</a>
              </li>
            </ul>
          </div>{" "}
          <div className="box">
            <h3>Home</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/tourPage"}>Tour Packages</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="box">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Provicy Policy</a>
              </li>
            </ul>
          </div>{" "}
          <div className="box">
            <h3>Contacts</h3>
            <ul>
              <li>
                <a href="#">
                  <FaLocationDot />
                  Piazza Napoleone, Lucca, Tuscany
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPhoneAlt /> +39 346 368 5708
                </a>
              </li>
              <li>
                <a href="#">
                  <MdEmail /> italiainlimo@gmail.com
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className=" social">
            <h3>Social Media</h3>
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="center">
          <p>Copyright © 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
