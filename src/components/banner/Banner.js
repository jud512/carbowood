import React from "react";
import "./banner.css";
const Banner = ({ title, children, subtitle, banner }) => {
  return (
    <div className={banner}>
      <div className="bannerContainer">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

Banner.defaultProps = {
  banner: "banner",
};

export default Banner;
