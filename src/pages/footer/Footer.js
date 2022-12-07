import React from "react";
import "./footer.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="contactInfo">
          <h3>Elérhetőség</h3>
          <p>9700 Szombathely, Bezerédi Amália utca 22. </p>
          <p className="contactInfoDetailed">
            <PhoneAndroidIcon />
            <span>+36 70 223 9933</span>
          </p>
          <p className="contactInfoDetailed">
            <EmailOutlinedIcon />
            <span>zeneszpeter@gmail.com</span>
          </p>
          <p className="contactInfoDetailed">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <PinterestIcon />
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.467156879831!2d16.61285741585008!3d47.24656767916242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476eb999a0a9c3c7%3A0xd4a3d206ff1ab6e0!2sSzombathely%2C%20Bezer%C3%A9di%20Am%C3%A1lia%20u.%2022%2C%209700!5e0!3m2!1shu!2shu!4v1669885884146!5m2!1shu!2shu"
            width={400}
            height={300}
          ></iframe>
        </div>
      </div>
      <span className="judyProject">
        Copyright © 2022 <a href="https://judyprojects.hu">JudyProjects</a>{" "}
        <br /> All rights reserved.
      </span>
      <div className="up">
        <a href="#">
          <ExpandLessIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
